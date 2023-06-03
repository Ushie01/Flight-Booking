import InfoContainer from './PersonalInfoContainer/InfoContainer';
import FormInform from './InfoItems/FormInform';
import Header from '../Header';



const PersonalInfo = () => {
	return (
		<InfoContainer>
			<Header
				backArrow={true}
				title='Personal Info'
			/>
			<FormInform />
		</InfoContainer>
	);
};

export default PersonalInfo;
