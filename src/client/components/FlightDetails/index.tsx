import DetailContainer from './FlightDetailsContainer/DetailContainer';
import HeaderConatiner from '../Header/HeaderContainer/HeaderContainer';
import Card from './Card';
import HeaderItems from '../Header/HeaderItems/HeaderItems';

const Details = () => {
	return (
		<DetailContainer>
			<HeaderConatiner>
				<HeaderItems
					image={true}
					title='Flight Details'
				/>
			</HeaderConatiner>
			<Card />
		</DetailContainer>
	);
};

export default Details;
