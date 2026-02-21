import {
  PaymentConfirmRequest,
  PaymentConfirmResponse,
  PaymentPrepareRequest,
  PaymentPrepareResponse,
} from "@/types/paymentsType";
import { api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

export const usePostPaymentPrepare = () => {
  return useMutation<PaymentPrepareResponse, Error, PaymentPrepareRequest>({
    mutationFn: async (
      params: PaymentPrepareRequest
    ): Promise<PaymentPrepareResponse> => {
      const response = await api.post<PaymentPrepareResponse["result"]>(
        "/api/v1/payments/prepare",
        params
      );

      if (!response.result) {
        throw new Error(response.message ?? "결제 준비에 실패했습니다.");
      }

      return {
        message: response.message ?? "결제 준비가 완료되었습니다.",
        result: response.result,
      };
    },
  });
};

export const usePostPaymentConfirm = () => {
  return useMutation<PaymentConfirmResponse, Error, PaymentConfirmRequest>({
    mutationFn: async (
      params: PaymentConfirmRequest
    ): Promise<PaymentConfirmResponse> => {
      const response = await api.post<PaymentConfirmResponse["result"]>(
        "/api/v1/payments/confirm",
        params
      );

      if (!response.result) {
        throw new Error(response.message ?? "결제 승인에 실패했습니다.");
      }

      return {
        message: response.message ?? "결제 승인이 완료되었습니다.",
        result: response.result,
      };
    },
  });
};
