import { api } from '../api';
import { SignupRequest as SignupPayload, SignupResponse as SignupApiResponse } from '@/types/authType';
export type SignupRequest = SignupPayload;
export type SignupResponse = SignupApiResponse["result"];

// 회원가입 API 함수
export const signup = async (signupData: SignupRequest): Promise<SignupResponse> => {
  try {
    const response = await api.post<SignupResponse>('/auth/signup', signupData);
    
    if (response.result) {
      return response.result;
    }
    
    throw new Error(response.message || '회원가입에 실패했습니다.');
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
}; 
