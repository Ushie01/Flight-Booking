import React from 'react';
import { AirplaneSvg } from '@/src/SVG/AirplaneInFlight';

export const FlightTravel = () => {
	return (
		<div className='relative flex flex-row items-center justify-center w-[50%]'>
			<div className='p-1 bg-slate-300 rounded-full'></div>
			<hr className='w-[100%] text-slate-300 font-bold' />
			<div className='absolute mr-1 p-2 bg-orange-50 rounded-full'>
				<AirplaneSvg
					height='30'
					width='30'
					color='white'
				/>
			</div>
			<div className='p-1 bg-slate-300 rounded-full'></div>
		</div>
	);
};
