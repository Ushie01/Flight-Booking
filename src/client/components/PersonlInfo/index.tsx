import InfoContainer from './PersonalInfoContainer/InfoContainer';
import FormInform from './InfoItems/FormInform';
import Header from '../Header';



const PersonalInfo = () => {
	return (
		<InfoContainer>
			<Header
				backArrow={true}
				title='Choose Seat'
			/>
			<FormInform />
		</InfoContainer>
	);
};

export default PersonalInfo;
