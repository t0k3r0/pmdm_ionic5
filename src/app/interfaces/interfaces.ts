/* eslint-disable @typescript-eslint/naming-convention */
export interface Incidence {
  incidenceId: string;
  sourceId: string;
  incidenceType: string;
  autonomousRegion: string;
  province: string;
  carRegistration: string;
  cause: string;
  startDate: string;
  incidenceLevel: string;
  road: string;
  pkStart: string;
  pkEnd: string;
  direction: string;
  latitude: string;
  longitude: string;
  cityTown: string;
}

export interface RootObject {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  incidences: Incidence[];
}

export interface ipData {
  ip: string;
  country_code: string;
  country_name: string;
  region_code: string;
  region_name: string;
  city: string;
  zip_code: string;
  time_zone: string;
  latitude: number;
  longitude: number;
  metro_code: number;
}
