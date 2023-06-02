import React from 'react'
import { Button } from '@heathmont/moon-core-tw';
import { FlightLogo } from '../../shared/FlightLogo'
import { HrL } from '../../shared/HorizontalLine';
import { TravelDate, TravelTime } from '../../shared/TravelTime';
import SeatPosition from '../../shared/SeatPosition';


const Card = () => {
  return (
		<div className='flex flex-col items-center justify-center'>
			<div className='rounded-2xl bg-white shadow-lg mt-10 mb-34 p-2'>
				<FlightLogo />
				<div className='space-y-6 p-4'>
					<HrL />
					<TravelTime />
					<TravelDate bgText='bg-white' />
					<HrL />
					<SeatPosition />
					<Button className='h-16 w-full rounded-xl bg-orange-50 text-white font-bold text-xl'>
						Modify
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Card
