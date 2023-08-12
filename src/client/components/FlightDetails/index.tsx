import DetailContainer from './FlightDetailsContainer/DetailContainer';
import HeaderContainer from '../Header/HeaderContainer/HeaderContainer';
import Card from './Card';
import HeaderItems from '../Header/HeaderItems/HeaderItems';
import { useGetFlightsQuery } from '@/src/store/api/flightsApi';


const Details = () => {
	const { data, error, isLoading } = useGetFlightsQuery({
		origin: 'LOS',
		destination: 'YXU',
		departureDate: '2023-07-28',
		returnDate: '2023-07-30',
		adults: 3,
		cabinClass: 'economy',
	});

	return (
		<DetailContainer>
			<HeaderContainer>
				<HeaderItems
					backArrow={true}
					title='Flight Details'
				/>
			</HeaderContainer>
			<Card />
		</DetailContainer>
	);
};

export default Details;
