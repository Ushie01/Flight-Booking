// import axios, { AxiosResponse } from 'axios';
// import type { NextApiRequest, NextApiResponse } from 'next';

// type Data = {
//   originState: string;
//   originCode: string;
//   destinationState: string;
//   destinationCode: string;
//   timeOfFlight: string;
//   departureTime: string;
//   arrivalTime: string;
//   flightName: string;
//   price: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<[]>
// ) {
//   const [flights, setFlights] = useState<Flight[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const options = {
//         method: 'GET',
//         url: 'https://app.goflightlabs.com/search-all-flights',
//         params: {
//           access_key:
//             'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZTA1OGI1OTUzOGUxZjFjYTllZWNiMDA5OTQ1OWRiYjliMDRjYjY0MjYwMWVlMWM2NmMzZmM1NzYwN2VhMjI5NjkwYzEzN2M5MDUwOGUzNTAiLCJpYXQiOjE2ODcwNDM1NDgsIm5iZiI6MTY4NzA0MzU0OCwiZXhwIjoxNzE4NjY1OTQ4LCJzdWIiOiIyMTE5NiIsInNjb3BlcyI6W119.I3GxtEvTJGGmKKHpPspCwuxnK6RRlzyNG0gA5zsDXi8mpSIOJ9Kv5uUwH10XZY6S5UhsbMIqtq5WwWI38mMATQ',
//           origin: 'LOS',
//           destination: 'YXU',
//           departureDate: '2023-07-28',
//           returnDate: '2023-07-30',
//           adults: 3,
//           cabinClass: 'economy',
//         },
//       };

//       try {
//         const response: AxiosResponse<any> = await axios.request(options);
//         const flightsData = response?.data?.data?.results.map((value: any) => {
//           const leg = value?.legs[0];

//           return {
//             originState: leg?.origin?.name ?? '',
//             originCode: leg?.origin?.displayCode ?? '',
//             destinationState: leg?.destination?.name ?? '',
//             destinationCode: leg?.destination?.displayCode ?? '',
//             timeOfFlight: leg?.durationInMinutes ?? '',
//             departureTime: leg?.departure ?? '',
//             arrivalTime: leg?.arrival ?? '',
//             flightName: leg?.carriers?.marketing[0]?.name ?? '',
//             price: value.pricing_options[0].price?.amount ?? '',
//           };
//         });

//         setFlights(flightsData);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);
// }
