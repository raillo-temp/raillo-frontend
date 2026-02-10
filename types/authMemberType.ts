// ========== 이메일 변경 인증코드 검증 ==========

export interface VerifyEmailChangeRequest {
  newEmail: string;
  authCode: string;
}

export interface VerifyEmailChangeResponse {
  message: string;
  result: Record<string, never>;
}

// ========== 이메일 변경 요청 ==========

export interface ChangeEmailRequest {
  email: string;
}

export interface ChangeEmailResult {
  email: string;
}

export interface ChangeEmailResponse {
  message: string;
  result: ChangeEmailResult;
}

// ========== 비밀번호 찾기 요청 ==========

export interface FindPasswordRequest {
  name: string;
  memberNo: string;
}

export interface FindPasswordResult {
  email: string;
}

export interface FindPasswordResponse {
  message: string;
  result: FindPasswordResult;
}

// ========== 비밀번호 찾기 인증코드 검증 ==========

export interface VerifyFindPasswordRequest {
  email: string;
  authCode: string;
}

export interface VerifyFindPasswordResult {
  temporaryToken: string;
}

export interface VerifyFindPasswordResponse {
  message: string;
  result: VerifyFindPasswordResult;
}

// ========== 회원번호 찾기 요청 ==========

export interface FindMemberNoRequest {
  name: string;
  phoneNumber: string;
}

export interface FindMemberNoResult {
  email: string;
}

export interface FindMemberNoResponse {
  message: string;
  result: FindMemberNoResult;
}

// ========== 회원번호 찾기 인증코드 검증 ==========

export interface VerifyFindMemberNoRequest {
  email: string;
  authCode: string;
}

export interface VerifyFindMemberNoResult {
  memberNo: string;
}

export interface VerifyFindMemberNoResponse {
  message: string;
  result: VerifyFindMemberNoResult;
}
