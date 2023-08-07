import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Flight = {
	origin: string;
	destination: string;
	departureDate: string;
	returnDate: string;
	adults: number;
	cabinClass: string;
};

const corsAnywhere = 'https://cors-anywhere.herokuapp.com';

const flightApi = createApi({
	reducerPath: 'flights',
	baseQuery: fetchBaseQuery({
		baseUrl: `${corsAnywhere}/https://app.goflightlabs.com`,
		// prepareHeaders: (headers) => {
		// 	headers.set('Access-Control-Allow-Origin', 'http://localhost:3000');
		// 	headers.set('Access-Control-Allow-Credentials', 'true');
		// 	// Add any other necessary headers here
		// 	return headers;
		// },
	}),
	endpoints: (builder) => ({
		getFlights: builder.query<Flight[], Flight>({
			query: (flight) => {
				return {
					url: '/search-all-flights',
					method: 'GET',
					params: {
						access_key: process.env.AIRPORTS_ACCESS_KEY,
						origin: flight.origin,
						destination: flight.destination,
						departureDate: flight.departureDate,
						returnDate: flight.returnDate,
						adults: flight.adults,
						cabinClass: flight.cabinClass,
					},
					responseHandler: async (response) => {
						const res = await response.json();
						const flightData: any[] = res.data.data.results.map(
							(value: any) => {
								const leg = value?.legs[0];

								return {
									originState: leg?.origin?.name ?? '',
									originCode: leg?.origin?.displayCode ?? '',
									destinationState: leg?.destination?.name ?? '',
									destinationCode: leg?.destination?.displayCode ?? '',
									timeOfFlight: leg?.durationInMinutes ?? '',
									departureTime: leg?.departure ?? '',
									arrivalTime: leg?.arrival ?? '',
									flightName: leg?.carriers?.marketing[0]?.name ?? '',
									price: value.pricing_options[0].price?.amount ?? '',
								};
							}
						);

						const uniqueFlight = flightData.filter(
							(value, index, self) =>
								index ===
								self.findIndex(
									(t) => JSON.stringify(t) === JSON.stringify(value)
								)
						);

						return uniqueFlight;
					},
				};
			},
		}),
	}),
});

export const { useGetFlightsQuery } = flightApi;
export { flightApi };
