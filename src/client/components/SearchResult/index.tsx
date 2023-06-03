import React from 'react';
import SearchContainer from './SearchContainer/SearchContainer';
import Card from './Card';
import Header from '../Header';


const Search = () => {
	return (
		<SearchContainer>
			<Header
				backArrow={true}
				title='Search Result'
			/>
			<Card />
			<hr className='text-slate-400 w-full mt-5' />
		</SearchContainer>
	);
};

export default Search;
