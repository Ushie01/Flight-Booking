import React from 'react';
import BookingContainer from './BookingContainer/BookingConatiner';
import Card from './Card';
import Header from '../Header';

const Booking = () => {
  return (
        <BookingContainer>
          <Header text='My Booking' bool={true} />
          <Card />
		</BookingContainer>
	);
}

export default Booking
