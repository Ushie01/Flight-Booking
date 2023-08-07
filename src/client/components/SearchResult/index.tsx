import React from 'react';
import SearchContainer from './SearchContainer/SearchContainer';
import Card from './Card';
import Header from '../Header';
import { useGetFlightsQuery } from '@/src/store/api/flightsApi';

const Search = () => {
	const { data, error, isLoading } = useGetFlightsQuery({
		origin: 'LOS',
		destination: 'YXU',
		departureDate: '2023-07-28',
		returnDate: '2023-07-30',
		adults: 3,
		cabinClass: 'economy',
	});
	console.log(data);

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
