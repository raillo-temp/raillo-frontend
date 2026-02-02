import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  SearchTrainCalendarResponse,
  SearchTrainCarsRequest,
  SearchTrainCarsResponse,
  SearchTrainScheduleRequest,
  SearchTrainScheduleResponse,
  TrainSeatsDetailRequest,
  TrainSeatsDetailResponse,
  TrainSeatsDetailResult,
} from "@/types/trainType";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

export const usePostTrainSeatsDetail = (
  params: TrainSeatsDetailRequest | null
) => {
  return useQuery({
    queryKey: ["trainSeatsDetail", params],
    queryFn: async (): Promise<TrainSeatsDetailResult> => {
      const { data } = await axios.post<TrainSeatsDetailResponse>(
        `${API_BASE_URL}/api/v1/trains/seats/detail`,
        params!,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return data.result;
    },
    enabled:
      params !== null &&
      params.trainCarId > 0 &&
      params.trainScheduleId > 0 &&
      params.departureStationId > 0 &&
      params.arrivalStationId > 0,
  });
};

export const usePostSearchTrainSchedule = (
  params: SearchTrainScheduleRequest | null
) => {
  return useQuery({
    queryKey: ["searchTrainSchedule", params],
    queryFn: async (): Promise<SearchTrainScheduleResponse> => {
      const { data } = await axios.post<SearchTrainScheduleResponse>(
        `${API_BASE_URL}/api/v1/trains/search/schedule`,
        params!,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return data;
    },
    enabled:
      params !== null &&
      params.departureStationId > 0 &&
      params.arrivalStationId > 0 &&
      params.operationDate !== "" &&
      params.passengerCount > 0 &&
      params.departureHour !== "",
  });
};

export const usePostSearchTrainCars = (
  params: SearchTrainCarsRequest | null
) => {
  return useQuery({
    queryKey: ["searchTrainCars", params],
    queryFn: async (): Promise<SearchTrainCarsResponse> => {
      const { data } = await axios.post<SearchTrainCarsResponse>(
        `${API_BASE_URL}/api/v1/trains/search/cars`,
        params!,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return data;
    },
    enabled:
      params !== null &&
      params.trainScheduleId > 0 &&
      params.departureStationId > 0 &&
      params.arrivalStationId > 0 &&
      params.passengerCount > 0,
  });
};

export const useGetSearchTrainCalendar = () => {
  return useQuery({
    queryKey: ["searchTrainCalendar"],
    queryFn: async (): Promise<SearchTrainCalendarResponse> => {
      const { data } = await axios.get<SearchTrainCalendarResponse>(
        `${API_BASE_URL}/api/v1/trains/search/calendar`
      );
      return data;
    },
    enabled: true,
  });
};
