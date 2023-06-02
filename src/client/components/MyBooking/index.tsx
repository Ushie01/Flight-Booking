import React from 'react';
import BookingContainer from './BookingContainer/BookingConatiner';
import Card from './Card';
import Header from '../Header';
import Navbar from '../Navbar';

const Booking = () => {
	return (
		<BookingContainer>
			<Header
				title='My Booking'
				backArrow={true}
			/>
			<Card />
			<div className='mt-24'>
				<Navbar />
			</div>
		</BookingContainer>
	);
};

export default Booking;
