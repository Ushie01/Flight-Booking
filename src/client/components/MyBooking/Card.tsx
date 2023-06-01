import React from 'react'
import { FlightLogo } from '../../shared/FlightLogo'
import { HrL } from '../../shared/HorizontalLine';


const Card = () => {
  return (
		<div className='flex flex-col items-center justify-center'>
			<div className='rounded-2xl bg-white shadow-lg mt-10'>
				<div className='p-2'>
					<FlightLogo />
				</div>
				<HrL />
			</div>
		</div>
	);
}

export default Card
