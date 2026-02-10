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
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

// ========== 회원가입 ==========

export const usePostSignup = () => {
  return useMutation<SignupResponse, Error, SignupRequest>({
    mutationFn: async (payload: SignupRequest): Promise<SignupResponse> => {
      const { data } = await axios.post<SignupResponse>(
        `${API_BASE_URL}/auth/signup`,
        payload
      );
      return data;
    },
  });
};

// ========== 인증된 사용자용 이메일 인증코드 전송 ==========

export const usePostAuthMemberSendEmailCode = () => {
  return useMutation<AuthMemberSendEmailCodeResponse, Error, void>({
    mutationFn: async (): Promise<AuthMemberSendEmailCodeResponse> => {
      const { data } = await axios.post<AuthMemberSendEmailCodeResponse>(
        `${API_BASE_URL}/auth/members/emails`
      );
      return data;
    },
  });
};

// ========== 로그아웃 ==========

export const usePostLogout = () => {
  return useMutation<LogoutResponse, Error, void>({
    mutationFn: async (): Promise<LogoutResponse> => {
      const { data } = await axios.post<LogoutResponse>(
        `${API_BASE_URL}/auth/logout`
      );
      return data;
    },
  });
};

// ========== 회원번호 로그인 ==========

export const usePostMemberNoLogin = () => {
  return useMutation<MemberNoLoginResponse, Error, MemberNoLoginRequest>({
    mutationFn: async (
      payload: MemberNoLoginRequest
    ): Promise<MemberNoLoginResponse> => {
      const { data } = await axios.post<MemberNoLoginResponse>(
        `${API_BASE_URL}/auth/login`,
        payload
      );
      return data;
    },
  });
};

// ========== 인증되지 않은 사용자용 이메일 인증코드 전송 ==========

export const usePostSendEmailCode = () => {
  return useMutation<SendEmailCodeResponse, Error, SendEmailCodeRequest>({
    mutationFn: async (
      payload: SendEmailCodeRequest
    ): Promise<SendEmailCodeResponse> => {
      const { data } = await axios.post<SendEmailCodeResponse>(
        `${API_BASE_URL}/auth/emails`,
        payload
      );
      return data;
    },
  });
};

// ========== 이메일 인증 코드 검증 ==========

export const usePostVerifyEmailCode = () => {
  return useMutation<VerifyEmailCodeResponse, Error, VerifyEmailCodeRequest>({
    mutationFn: async (
      payload: VerifyEmailCodeRequest
    ): Promise<VerifyEmailCodeResponse> => {
      const { data } = await axios.post<VerifyEmailCodeResponse>(
        `${API_BASE_URL}/auth/emails/verify`,
        payload
      );
      return data;
    },
  });
};
