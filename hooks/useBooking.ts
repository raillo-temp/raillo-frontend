import {
  BookingListParams,
  BookingListResponse,
  CancelBookingRequest,
  CancelBookingResponse,
  TicketDetailParams,
  TicketDetailResponse,
} from "@/types/bookingsType";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

export const useGetBookingList = (params: BookingListParams | null) => {
  return useQuery({
    queryKey: ["bookings", params],
    queryFn: async (): Promise<BookingListResponse> => {
      const { data } = await axios.get<BookingListResponse>(
        `${API_BASE_URL}/api/v1/bookings`,
        { params: params ?? undefined }
      );
      return data;
    },
    enabled: params !== null,
  });
};

// ========== 승차권 상세 조회 ==========

export const useGetTicketDetail = (params: TicketDetailParams | null) => {
  return useQuery({
    queryKey: ["bookingDetail", params?.bookingId],
    queryFn: async (): Promise<TicketDetailResponse> => {
      const { data } = await axios.get<TicketDetailResponse>(
        `${API_BASE_URL}/api/v1/bookings/${params!.bookingId}`
      );
      return data;
    },
    enabled: params !== null && (params?.bookingId ?? 0) > 0,
  });
};

// ========== 예매 취소 ==========

export const useDeleteBooking = () => {
  return useMutation<CancelBookingResponse, Error, CancelBookingRequest>({
    mutationFn: async (
      payload: CancelBookingRequest
    ): Promise<CancelBookingResponse> => {
      const { data } = await axios.delete<CancelBookingResponse>(
        `${API_BASE_URL}/api/v1/bookings`,
        { data: payload }
      );
      return data;
    },
  });
};
