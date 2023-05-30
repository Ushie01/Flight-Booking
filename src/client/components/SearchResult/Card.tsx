import { ChairSvg } from '../../../SVG/Chair';
import { FlightTravel } from '../../shared/FlightTravel';

const Card = () => {
	return (
		<div className='rounded-2xl bg-white shadow-lg'>
			<div className='p-4 mt-10'>
				<div className='flex flex-row items-center justify-between font-bold'>
					<div className='flex flex-row items-center justify-start'>
						<div className='border font-bold p-1 rounded-md'>Logo</div>
						<p className='ml-3'>IN 230</p>
					</div>
					<p className='text-gray-500'>01 hr 40min</p>
				</div>

				<div className='flex flex-row items-center justify-between mt-5'>
					<div className='flex flex-col items-start justify-start'>
						<p className='font-extrabold text-2xl'>5.50</p>
						<p className='text-gray-500 text-sm'>{'DEL (Delhi)'}</p>
					</div>
					<FlightTravel />
					<div className='flex flex-col items-end justify-end'>
						<p className='font-extrabold text-2xl'>7.30</p>
						<p className='text-gray-500 text-sm'>{'CCU (Kolkata)'}</p>
					</div>
				</div>
			</div>

			<hr className='w-full text-slate-300 mt-3 font-bold' />

			<div className='p-4 mt-3'>
				<div className='flex flex-row items-center justify-between text-gray-500'>
					<div className='flex flex-row items-center justify-start space-x-1'>
						<ChairSvg
							width='24'
							height='24'
							color='white'
						/>
						<p className='font-thin text-xl'>Business Class</p>
					</div>
					<div className='flex flex-row items-center justify-center space-x-2'>
						<p className='text-xl'>From</p>
						<p className='text-2xl font-extrabold text-black'>$230</p>
					</div>
				</div>
				<button className='font-bold text-xl text-white w-full pt-3 pb-3 bg-orange-50 shadow-lg rounded-lg mt-5'>
					Check
				</button>
			</div>
		</div>
	);
};

export default Card;
