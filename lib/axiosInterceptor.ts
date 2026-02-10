import axios from "axios";
import { useAuthStore } from "@/stores/auth-store";
import { TokenReissueResponse } from "@/types/authType";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

// 모든 axios 요청에 자격 증명(쿠키) 포함
axios.defaults.withCredentials = true;

// 요청 인터셉터: Zustand accessToken을 Authorization 헤더에 자동 첨부
axios.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().getToken();

    if (token) {
      config.headers = config.headers ?? {};
      if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터: 401이면 reissue 시도 후 한 번 재요청
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response, config } = error;

    if (!response || !config) {
      return Promise.reject(error);
    }

    // 이미 재시도한 요청이면 그대로 에러 반환
    if ((config as any)._retry) {
      return Promise.reject(error);
    }

    // 401이면서 reissue 대상이 아닌 경우에만 처리
    if (response.status === 401 && !config.url?.includes("/auth/reissue")) {
      (config as any)._retry = true;

      const { setTokens, removeTokens } = useAuthStore.getState();

      try {
        const { data } = await axios.post<TokenReissueResponse>(
          `${API_BASE_URL}/auth/reissue`,
          {},
          { withCredentials: true }
        );

        if (data.result) {
          const { accessToken, accessTokenExpiresIn } = data.result;
          const expiresIn = Date.now() + accessTokenExpiresIn * 1000;

          // Zustand에 토큰 저장
          setTokens(accessToken, expiresIn);

          // 원래 요청의 Authorization 헤더 갱신
          config.headers = config.headers ?? {};
          config.headers["Authorization"] = `Bearer ${accessToken}`;

          // 갱신된 토큰으로 원래 요청 재시도
          return axios(config);
        }

        // result가 없으면 실패로 간주
        removeTokens();
        return Promise.reject(error);
      } catch (e) {
        // reissue 자체가 실패하면 토큰 제거
        removeTokens();
        return Promise.reject(e);
      }
    }

    return Promise.reject(error);
  }
);
