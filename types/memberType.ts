// ========== 연락처 변경 ==========

export interface ChangePhoneNumberRequest {
  newPhoneNumber: string;
}

export interface ChangePhoneNumberResponse {
  message: string;
  result: Record<string, never>;
}

// ========== 비밀번호 변경 ==========

export interface ChangePasswordRequest {
  newPassword: string;
}

export interface ChangePasswordResponse {
  message: string;
  result: Record<string, never>;
}

// ========== 비회원 등록 ==========

export interface RegisterGuestRequest {
  name: string;
  phoneNumber: string;
  password: string;
}

export interface RegisterGuestResult {
  name: string;
  role: string;
}

export interface RegisterGuestResponse {
  message: string;
  result: RegisterGuestResult;
}

// ========== 회원 정보 조회 ==========

export interface MemberDetailInfo {
  memberNo: string;
  email: string;
  birthDate: string;
  gender: string;
}

export interface MemberInfoResult {
  name: string;
  phoneNumber: string;
  role: string;
  memberDetailInfo: MemberDetailInfo;
}

export interface GetMemberInfoResponse {
  message: string;
  result: MemberInfoResult;
}

// ========== 회원 삭제 ==========

export interface DeleteMemberResponse {
  message: string;
  result: Record<string, never>;
}
