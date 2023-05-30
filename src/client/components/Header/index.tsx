import React from 'react';
import HeaderConatiner from './HeaderContainer/HeaderContainer';
import HeaderItems from './HeaderItems/HeaderItems';

const Header = () => {
	return (
		<HeaderConatiner>
			<HeaderItems
				image={false}
				title='Book Flight'
			/>
		</HeaderConatiner>
	);
};

export default Header;
