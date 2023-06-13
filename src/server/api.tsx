// import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const response = await axios.get('https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat');
//     const airportsData = response.data.split('\n');

//     const airport = airportsData.map((airportData: string) => {
//       const data = airportData.split(',');
//       const airportCode = data[4]?.replace(/"/g, '');
//       const airportName = data[2]?.replace(/"/g, '');
//       const airportLocation = data[1]?.replace(/"/g, '');

//       const airportInfo = {
//         airportCode,
//         airportName,
//         airportLocation
//       };

//       return airportInfo;
//     });

//     res.json(airport);
//   } catch (error) {
//     res.json({ error: error.message });
//   }
// }
