import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import dotenv from 'dotenv';
dotenv.config();

type Airport = {
	airportName: string;
	city: string;
	country: string;
	iata: string;
	icao: string;
	latitude: number;
	longitude: number;
	altitude: number;
	timezone: number;
	dst: string;
	tz: string;
	type: string;
	source: string;
}

const airportApi = createApi({
	reducerPath: 'airports',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://raw.githubusercontent.com',
	}),
	endpoints: (builder) => ({
		getAirports: builder.query<Airport[], void>({
			query: () => {
				return {
					url: '/jpatokal/openflights/master/data/airports.dat',
					method: 'GET',
					responseHandler: async (response) => {
						const text = await response.text();
						// Parse the text response into JSON
						const airports = text
							.split('\n')
							.map((line) => line.split(','))
							.map((values) => ({
								airportName: values[1]?.replace(/"/g, ''),
								city: values[2]?.replace(/"/g, ''),
								country: values[3]?.replace(/"/g, ''),
								iata: values[4]?.replace(/"/g, ''),
								icao: values[5]?.replace(/"/g, ''),
								latitude: parseFloat(values[6]?.replace(/"/g, '')),
								longitude: parseFloat(values[7]?.replace(/"/g, '')),
								altitude: parseFloat(values[8]?.replace(/"/g, '')),
								timezone: parseFloat(values[9]?.replace(/"/g, '')),
								dst: values[10]?.replace(/"/g, ''),
								tz: values[11]?.replace(/"/g, ''),
								type: values[12]?.replace(/"/g, ''),
								source: values[13]?.replace(/"/g, ''),
							}));
						return airports;
					},
				};
			},
		}),
	}),
});

export const { useGetAirportsQuery } = airportApi;
export { airportApi };
