import React from 'react';

type Prop = {
	children: React.ReactNode;
};

const BookingConatiner = ({ children }: Prop) => {
	return <div className='w-full bg-gray-60 p-4 h-screen'>{children}</div>;
};

export default BookingConatiner;
