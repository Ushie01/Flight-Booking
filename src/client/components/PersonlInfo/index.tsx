import InfoContainer from "./PersonalInfoContainer/InfoContainer";
import HeaderConatiner from "../Header/HeaderContainer/HeaderContainer";
import HeaderItems from "../Header/HeaderItems/HeaderItems";
import FormInform from "./InfoItems/FormInform";


const PersonalInfo = () => {
    return (
        <InfoContainer>
            <HeaderConatiner>
                <HeaderItems
                    image={true}
                    title='Choose Seat'
                />
            </HeaderConatiner>
            <FormInform />
        </InfoContainer>
    )
}

export default PersonalInfo;