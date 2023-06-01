import React from 'react';
import HeaderConatiner from './HeaderContainer/HeaderContainer';
import HeaderItems from './HeaderItems/HeaderItems';

type Props = {
	text: string,
	bool: boolean
}

const Header = ({text, bool}: Props) => {
	return (
		<HeaderConatiner>
			<HeaderItems
				image={bool}
				title={text}
			/>
		</HeaderConatiner>
	);
};

export default Header;
