import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import dotenv from 'dotenv';
dotenv.config();

interface Airport {
  airport_name: string;
  city_iata_code: string;
  timezone: string;
}

const airportApi = createApi({
  reducerPath: 'airports',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.aviationstack.com',
  }),
  endpoints: (builder) => ({
    getAirports: builder.query({
    //   providesTags: (result, args) => {
    //     if (result) {
    //       return result?.map((value, index) => ({
    //         type: 'Airport' as const,
    //         airportName: value.airport_name,
    //         city_iata: value.city_iata_code,
    //         timezone: value.timezone
    //       }));
    //     }
    //     return [];
    //   },
      query: () => {
        return {
          url: `/v1/airports?access_key=${process.env.AIRPORTS_ACCESS_KEY}`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetAirportsQuery } = airportApi;
export { airportApi };

