// ========== 예매 목록 조회 ==========

export interface BookingListParams {
  status: "UPCOMING" | "HISTORY" | "ALL";
}

export interface BookingTicketItem {
  ticketId: number;
  ticketNumber: string;
  status: string;
  passengerType: string;
  carNumber: number;
  carType: string;
  seatNumber: string;
}

export interface BookingListItem {
  bookingId: number;
  bookingCode: string;
  trainNumber: string;
  trainName: string;
  departureStationName: string;
  arrivalStationName: string;
  departureTime: string;
  arrivalTime: string;
  operationDate: string;
  tickets: BookingTicketItem[];
}

export interface BookingListResponse {
  message: string;
  result: BookingListItem[];
}

// ========== 승차권 상세 조회 ==========

export interface TicketDetailParams {
  bookingId: number;
}

export interface TicketDetailResponse {
  message: string;
  result: BookingListItem;
}

// ========== 예매 취소 ==========

export interface CancelBookingRequest {
  bookingId: number;
}

export interface CancelBookingResponse {
  message: string;
  result: Record<string, never>;
}
