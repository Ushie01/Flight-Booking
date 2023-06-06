import React from 'react';
import { FlightLogo } from '../../shared/FlightLogo';
import { HrL } from '../../shared/HorizontalLine';
import { TravelDate, TravelTime } from '../../shared/TravelTime';
import SeatPosition from '../../shared/SeatPosition';
import { DefaultButton } from '../../shared/Button';

const Card = () => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='rounded-2xl bg-white shadow-lg mt-10 mb-34 p-2'>
				<FlightLogo />
				<div className='space-y-6 p-4'>
					<HrL />
					<TravelTime />
					<TravelDate
						bgText='bg-white' 
						DateValue='19/20/2023'
						TimeValue='12:23am'
					/>
					<HrL />
					<SeatPosition />
					<div className='mt-6'>
						<DefaultButton
							href='/flight-detail'
							text='Modify'
							height='h-12'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
