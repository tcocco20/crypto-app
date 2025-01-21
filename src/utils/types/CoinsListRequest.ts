import { CoinsListResponse } from "./CoinsListResponse";

export interface CoinsListRequest {
  data: CoinsListResponse;
  variables: {
    currency: string;
    page: number;
    sparkline: boolean;
  };
}
