// ========== 회원가입 ==========

export interface SignupRequest {
  name: string;
  phoneNumber: string;
  password: string;
  email: string;
  birthDate: string;
  gender: string;
}

export interface SignupResult {
  memberNo: string;
}

export interface SignupResponse {
  message: string;
  result: SignupResult;
}

// ========== 인증된 사용자용 이메일 인증코드 전송 ==========

export interface AuthMemberSendEmailCodeResult {
  email: string;
}

export interface AuthMemberSendEmailCodeResponse {
  message: string;
  result: AuthMemberSendEmailCodeResult;
}

// ========== 로그아웃 ==========

export interface LogoutResponse {
  message: string;
  result: Record<string, never>;
}

// ========== 회원번호 로그인 ==========

export interface MemberNoLoginRequest {
  memberNo: string;
  password: string;
}

export interface MemberNoLoginResult {
  grantType: string;
  accessToken: string;
  accessTokenExpiresIn: number;
}

export interface MemberNoLoginResponse {
  message: string;
  result: MemberNoLoginResult;
}

// ========== 인증되지 않은 사용자용 이메일 인증코드 전송 ==========

export interface SendEmailCodeRequest {
  email: string;
}

export interface SendEmailCodeResult {
  email: string;
}

export interface SendEmailCodeResponse {
  message: string;
  result: SendEmailCodeResult;
}

// ========== 이메일 인증 코드 검증 ==========

export interface VerifyEmailCodeRequest {
  email: string;
  authCode: string;
}

export interface VerifyEmailCodeResult {
  isVerified: boolean;
}

export interface VerifyEmailCodeResponse {
  message: string;
  result: VerifyEmailCodeResult;
}

// ========== 토큰 재발급 ==========

export interface TokenReissueResult {
  grantType: string;
  accessToken: string;
  accessTokenExpiresIn: number;
}

export interface TokenReissueResponse {
  message: string;
  result: TokenReissueResult;
}
