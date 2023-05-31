import React from 'react'
import HeaderContainer from '../Header/HeaderContainer/HeaderContainer';
import HeaderItems from '../Header/HeaderItems/HeaderItems';
import BoardingContainer from './BoardingContainer/BoardingContainer';
import Boarding from './Boarding';


const BoardingPass = () => {
  return (
		<BoardingContainer>
			<HeaderContainer>
				<HeaderItems
					image={true}
					title='Boarding Pass'
				/>
			</HeaderContainer>
			<Boarding />
		</BoardingContainer>
	);
}

export default BoardingPass
