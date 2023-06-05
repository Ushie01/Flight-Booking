import { TravelTime, TravelDate } from '../../shared/TravelTime';
import { FlightLogo } from '../../shared/FlightLogo';
import { HrL } from '../../shared/HorizontalLine';
import { BorderButton, DefaultButton } from '../../shared/Button';

const Card = () => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='rounded-2xl bg-white shadow-lg mt-10'>
				<div className='p-2'>
					<FlightLogo />
				</div>
				<HrL />
				<div className='p-6'>
					<TravelTime />
				</div>
				<HrL />
				<div className='p-6'>
					<TravelDate bgText='bg-white' />
				</div>
				<HrL />
				<div className='flex items-center justify-center space-x-3 p-6 mt-3 m-auto'>
					<p className='font-thin text-3xl'>Price</p>
					<p className='text-5xl font-bold'>$230</p>
				</div>
			</div>
			<div className='flex flex-row items-center justify-center w-full space-x-3 mt-10'>
				<BorderButton
					href='/search-result'
					text='Cancel'
					height='h-16'
				/>
					<DefaultButton
						href='/choose-seat'
						text='Confirm'
						height='h-16'
					/>
			</div>
		</div>
	);
};

export default Card;
