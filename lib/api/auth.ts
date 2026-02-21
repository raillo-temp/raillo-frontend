import { api, ApiResponse } from '../api';
import { MemberNoLoginResult, TokenReissueResult } from "@/types/authType";

// 로그인 요청 타입
export interface LoginRequest {
    memberNo: string;
    password: string;
}

// 회원번호 찾기 요청 타입
export interface FindMemberNoRequest {
    name: string;
    phoneNumber: string;
}

// 회원번호 찾기 응답 타입
export interface FindMemberNoResponse {
    email: string;
}

// 회원번호 찾기 인증 요청 타입
export interface VerifyMemberNoRequest {
    email: string;
    authCode: string;
}

// 회원번호 찾기 인증 응답 타입
export interface VerifyMemberNoResponse {
    memberNo: string;
}

// 비밀번호 찾기 요청 타입
export interface FindPasswordRequest {
    name: string;
    memberNo: string;
}

// 비밀번호 찾기 응답 타입
export interface FindPasswordResponse {
    email: string;
}

// 비밀번호 찾기 인증 요청 타입
export interface VerifyPasswordRequest {
    email: string;
    authCode: string;
}

// 비밀번호 찾기 인증 응답 타입
export interface VerifyPasswordResponse {
    temporaryToken: string;
}

// 비밀번호 변경 요청 타입
export interface ChangePasswordRequest {
    newPassword: string;
}

// 인증 관련 API
export const authAPI = {
    // 로그인
    login: async (data: LoginRequest): Promise<ApiResponse<MemberNoLoginResult>> => {
        return api.post<MemberNoLoginResult>('/auth/login', data);
    },

    // 로그아웃
    logout: async (): Promise<ApiResponse> => {
        return api.post('/auth/logout');
    },

    // 토큰 갱신
    reissueToken: async (): Promise<ApiResponse<TokenReissueResult>> => {
        return api.post<TokenReissueResult>('/auth/reissue');
    },

    // 회원번호 찾기 (이메일 인증 코드 전송)
    findMemberNo: async (data: FindMemberNoRequest): Promise<ApiResponse<FindMemberNoResponse>> => {
        return api.post<FindMemberNoResponse>('/auth/member-no', data);
    },

    // 회원번호 찾기 인증 코드 검증
    verifyMemberNo: async (data: VerifyMemberNoRequest): Promise<ApiResponse<VerifyMemberNoResponse>> => {
        return api.post<VerifyMemberNoResponse>('/auth/member-no/verify', data);
    },

    // 비밀번호 찾기 (이메일 인증 코드 전송)
    findPassword: async (data: FindPasswordRequest): Promise<ApiResponse<FindPasswordResponse>> => {
        return api.post<FindPasswordResponse>('/auth/password', data);
    },

    // 비밀번호 찾기 인증 코드 검증
    verifyPassword: async (data: VerifyPasswordRequest): Promise<ApiResponse<VerifyPasswordResponse>> => {
        return api.post<VerifyPasswordResponse>('/auth/password/verify', data);
    },

    // 비밀번호 변경 (임시 토큰 사용)
    changePassword: async (requestData: ChangePasswordRequest, temporaryToken: string): Promise<ApiResponse> => {
        return api.request('/members/password', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${temporaryToken}`,
            },
            body: JSON.stringify(requestData),
        });
    },
};

// 기존 호환성을 위한 export
export const login = authAPI.login;
export const logout = authAPI.logout; 
