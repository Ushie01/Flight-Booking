import React from 'react';
import SearchContainer from './SearchContainer/SearchContainer';
import Card from './Card';
import HeaderConatiner from '../Header/HeaderContainer/HeaderContainer';
import HeaderItems from '../Header/HeaderItems/HeaderItems';

const Search = () => {
	return (
		<SearchContainer>
			<HeaderConatiner>
				<HeaderItems
					image={true}
					title='Search Result'
				/>
			</HeaderConatiner>
			<Card />
			<hr className='text-slate-400 w-full mt-5' />
		</SearchContainer>
	);
};

export default Search;
