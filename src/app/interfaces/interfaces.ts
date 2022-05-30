/* eslint-disable @typescript-eslint/naming-convention */
export interface incidencias {
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
  latitude: number;
  longitude: number;
  cityTown: string;
}

export interface raizIncidentes {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  incidences:  incidencias[];
}

export interface ICoordenadas {
  incidences: Array<ICoord>;
}


export interface ICoord {
  latitude: string;
  longitude: string;
}
