import DetailContainer from './FlightDetailsContainer/DetailContainer';
import HeaderContainer from '../Header/HeaderContainer/HeaderContainer';
import Card from './Card';
import HeaderItems from '../Header/HeaderItems/HeaderItems';

const Details = () => {
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
