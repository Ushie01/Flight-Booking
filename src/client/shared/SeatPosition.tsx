import React from 'react';
import { SEAT_POSITION } from '../constant/data';

const SeatPosition = () => {
	return (
		<div className='flex items-center justify-between w-full mt-3'>
			{SEAT_POSITION.map((v, index) => (
				<div
					key={index}
					className='flex flex-col items-start justify-start'>
					<p className='text-gray-900 text-sm'>{v.text}</p>
					<p className='text-black font-bold text-xl'>{v.value}</p>
				</div>
			))}
		</div>
	);
};

export default SeatPosition;
