import React from 'react';
import HeaderConatiner from './HeaderContainer/HeaderContainer';
import HeaderItems from './HeaderItems/HeaderItems';


type Props = {
	title: string;
	backArrow: boolean
}


const Header = ({title, backArrow}: Props) => {
	return (
		<HeaderConatiner>
			<HeaderItems
				backArrow={backArrow}
				title={title}
			/>
		</HeaderConatiner>
	);
};

export default Header;
