import SeatContainer from "./ChooseSeatContainer/SeatContainer";
import ButtonSign from "./ChooseSeatItems/ButtonSign";
import SeatButton from "./ChooseSeatItems/SeatButtons";
import HeaderConatiner from "../Header/HeaderContainer/HeaderContainer";
import HeaderItems from "../Header/HeaderItems/HeaderItems";


const ChooseSeat = () => {
    return (
        <SeatContainer>
            <HeaderConatiner>
                <HeaderItems
                    image={true}
                    title='Flight Details'
                />
            </HeaderConatiner>
            <ButtonSign />
            <SeatButton />
        </SeatContainer>
    )
}

export default ChooseSeat