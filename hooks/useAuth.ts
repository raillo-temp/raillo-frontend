import {
  AuthMemberSendEmailCodeResponse,
  LogoutResponse,
  MemberNoLoginRequest,
  MemberNoLoginResponse,
  SendEmailCodeRequest,
  SendEmailCodeResponse,
  SignupRequest,
  SignupResponse,
  VerifyEmailCodeRequest,
  VerifyEmailCodeResponse,
} from "@/types/authType";
import { api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

function requireResult<T>(result: T | undefined, fallbackMessage: string): T {
  if (result === undefined || result === null) {
    throw new Error(fallbackMessage);
  }
  return result;
}

// ========== 회원가입 ==========

export const usePostSignup = () => {
  return useMutation<SignupResponse, Error, SignupRequest>({
    mutationFn: async (payload: SignupRequest): Promise<SignupResponse> => {
      const response = await api.post<SignupResponse["result"]>(
        "/auth/signup",
        payload
      );
      return {
        message: response.message ?? "회원가입에 성공했습니다.",
        result: requireResult(response.result, "회원가입 결과가 비어 있습니다."),
      };
    },
  });
};

// ========== 인증된 사용자용 이메일 인증코드 전송 ==========

export const usePostAuthMemberSendEmailCode = () => {
  return useMutation<AuthMemberSendEmailCodeResponse, Error, void>({
    mutationFn: async (): Promise<AuthMemberSendEmailCodeResponse> => {
      const response = await api.post<AuthMemberSendEmailCodeResponse["result"]>(
        "/auth/members/emails"
      );
      return {
        message: response.message ?? "인증코드가 발송되었습니다.",
        result: requireResult(response.result, "인증코드 발송 결과가 비어 있습니다."),
      };
    },
  });
};

// ========== 로그아웃 ==========

export const usePostLogout = () => {
  return useMutation<LogoutResponse, Error, void>({
    mutationFn: async (): Promise<LogoutResponse> => {
      const response = await api.post<LogoutResponse["result"]>("/auth/logout");
      return {
        message: response.message ?? "로그아웃되었습니다.",
        result: response.result ?? {},
      };
    },
  });
};

// ========== 회원번호 로그인 ==========

export const usePostMemberNoLogin = () => {
  return useMutation<MemberNoLoginResponse, Error, MemberNoLoginRequest>({
    mutationFn: async (
      payload: MemberNoLoginRequest
    ): Promise<MemberNoLoginResponse> => {
      const response = await api.post<MemberNoLoginResponse["result"]>(
        "/auth/login",
        payload
      );
      return {
        message: response.message ?? "로그인에 성공했습니다.",
        result: requireResult(response.result, "로그인 응답이 비어 있습니다."),
      };
    },
  });
};

// ========== 인증되지 않은 사용자용 이메일 인증코드 전송 ==========

export const usePostSendEmailCode = () => {
  return useMutation<SendEmailCodeResponse, Error, SendEmailCodeRequest>({
    mutationFn: async (
      payload: SendEmailCodeRequest
    ): Promise<SendEmailCodeResponse> => {
      const response = await api.post<SendEmailCodeResponse["result"]>(
        "/auth/emails",
        payload
      );
      return {
        message: response.message ?? "인증코드가 발송되었습니다.",
        result: requireResult(response.result, "인증코드 발송 결과가 비어 있습니다."),
      };
    },
  });
};

// ========== 이메일 인증 코드 검증 ==========

export const usePostVerifyEmailCode = () => {
  return useMutation<VerifyEmailCodeResponse, Error, VerifyEmailCodeRequest>({
    mutationFn: async (
      payload: VerifyEmailCodeRequest
    ): Promise<VerifyEmailCodeResponse> => {
      const response = await api.post<VerifyEmailCodeResponse["result"]>(
        "/auth/emails/verify",
        payload
      );
      return {
        message: response.message ?? "인증에 성공했습니다.",
        result: requireResult(response.result, "이메일 인증 결과가 비어 있습니다."),
      };
    },
  });
};
