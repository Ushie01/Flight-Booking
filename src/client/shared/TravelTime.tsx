import React from 'react';
import { FlightTravel } from './FlightTravel';
import { DateLabel, TimeLabel } from './DateTimeLabel';

type Props = {
	bgText: string;
	DateValue: string;
	TimeValue: string;
};

export const TravelTime = () => {
	return (
		<div>
			<div className='flex flex-row items-center justify-between w-full'>
				<div className='flex flex-col items-start justify-start'>
					<p className='font-extrabold text-3xl'>5.50</p>
					<p className='text-bold text-xl'>DEL</p>
				</div>
				<FlightTravel />
				<div className='flex flex-col items-end justify-end '>
					<p className='font-extrabold text-3xl'>7.30</p>
					<p className='text-bold text-xl text-end'>CCU</p>
				</div>
			</div>
			<div className='flex flex-row items-center justify-between text-md text-gray-400  mt-3'>
				<p className='text-start w-2/5'>Indira Gandhi International Airport</p>
				<p className='text-end w-2/5'>
					Subhash Chandra Bose International Airport
				</p>
			</div>
		</div>
	);
};

export const TravelDate = ({ bgText, DateValue, TimeValue }: Props) => {
	return (
		<div className='flex flex-row items-center justify-between space-x-4'>
				<DateLabel
					bgText={bgText}
					value={DateValue}
				/>
				<TimeLabel
					bgText={bgText}
					value={TimeValue}
				/>
		</div>
	);
};
