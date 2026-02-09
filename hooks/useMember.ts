import {
  ChangePasswordRequest,
  ChangePasswordResponse,
  ChangePhoneNumberRequest,
  ChangePhoneNumberResponse,
  DeleteMemberResponse,
  GetMemberInfoResponse,
  RegisterGuestRequest,
  RegisterGuestResponse,
} from "@/types/memberType";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

export const usePutChangePhoneNumber = () => {
  return useMutation<
    ChangePhoneNumberResponse,
    Error,
    ChangePhoneNumberRequest
  >({
    mutationFn: async (
      params: ChangePhoneNumberRequest
    ): Promise<ChangePhoneNumberResponse> => {
      try {
        const { data } = await axios.put<ChangePhoneNumberResponse>(
          `${API_BASE_URL}/api/v1/members/phone-number`,
          params
        );
        return data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const message =
            (error.response.data as { message?: string }).message ||
            "전화번호 변경에 실패했습니다.";
          throw new Error(message);
        }
        throw error;
      }
    },
  });
};

export const usePutChangePassword = () => {
  return useMutation<ChangePasswordResponse, Error, ChangePasswordRequest>({
    mutationFn: async (
      params: ChangePasswordRequest
    ): Promise<ChangePasswordResponse> => {
      try {
        const { data } = await axios.put<ChangePasswordResponse>(
          `${API_BASE_URL}/api/v1/members/password`,
          params
        );
        return data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const message =
            (error.response.data as { message?: string }).message ||
            "비밀번호 변경에 실패했습니다.";
          throw new Error(message);
        }
        throw error;
      }
    },
  });
};

export const usePostRegisterGuest = () => {
  return useMutation<RegisterGuestResponse, Error, RegisterGuestRequest>({
    mutationFn: async (
      params: RegisterGuestRequest
    ): Promise<RegisterGuestResponse> => {
      try {
        const { data } = await axios.post<RegisterGuestResponse>(
          `${API_BASE_URL}/api/v1/guest/register`,
          params
        );
        return data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const message =
            (error.response.data as { message?: string }).message ||
            "게스트 등록에 실패했습니다.";
          throw new Error(message);
        }
        throw error;
      }
    },
  });
};

export const useGetMemberInfo = () => {
  return useQuery<GetMemberInfoResponse, Error>({
    queryKey: ["memberInfo"],
    queryFn: async (): Promise<GetMemberInfoResponse> => {
      try {
        const { data } = await axios.get<GetMemberInfoResponse>(
          `${API_BASE_URL}/api/v1/members/me`
        );
        return data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const message =
            (error.response.data as { message?: string }).message ||
            "회원 정보 조회에 실패했습니다.";
          throw new Error(message);
        }
        throw error;
      }
    },
  });
};

export const useDeleteMember = () => {
  return useMutation<DeleteMemberResponse, Error, void>({
    mutationFn: async (): Promise<DeleteMemberResponse> => {
      try {
        const { data } = await axios.delete<DeleteMemberResponse>(
          `${API_BASE_URL}/api/v1/members`
        );
        return data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const message =
            (error.response.data as { message?: string }).message ||
            "회원 탈퇴에 실패했습니다.";
          throw new Error(message);
        }
        throw error;
      }
    },
  });
};
