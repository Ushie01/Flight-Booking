import { Button } from '@heathmont/moon-core-tw';
import { FlightTravel } from '../../shared/FlightTravel';
import { Input } from '../../shared/InputField';
import { useState } from 'react';

const Card = () => {
	// const [click, setClick] = useState(flase);

	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='rounded-2xl bg-white shadow-lg mt-10'>
				<div className='p-4'>
					<div className='flex items-center justify-center'>
						<p className='text-4xl font-extrabold text-blue-800 p-3 border'>
							Logo
						</p>
					</div>
				</div>

				<hr className='text-gray-100 mt-3' />

				<div className='p-4 mt-4'>
					<div className='flex flex-row items-center justify-between'>
						<div className='flex flex-col items-start justify-start'>
							<p className='font-extrabold text-3xl'>5.50</p>
							<p className='text-bold text-xl'>DEL</p>
						</div>
						<FlightTravel />
						<div className='flex flex-col items-end justify-end'>
							<p className='font-extrabold text-3xl'>7.30</p>
							<p className='text-bold text-xl'>CCU</p>
						</div>
					</div>
					<div className='flex flex-row items-center justify-between text-md text-gray-400  mt-3'>
						<p className='text-start w-2/5'>
							Indira Gandhi International Airport
						</p>
						<p className='text-end w-2/5'>
							Subhash Chandra Bose International Airport
						</p>
					</div>
				</div>

				<hr className='text-gray-100 mt-3' />

				<div className='p-4 mt-3'>
					<div className='flex flex-row items-center justify-between mt-4 space-x-4 w-full'>
						<div className='w-1/2'>
							<Input
								fieldName='Date'
								icon={false}
								widthFull={false}
								textField={false}
								secondIcon={false}
								dateField={true}
								text={''}
								placeHolder=''
							/>
						</div>
						<div className='w-1/2'>
							<Input
								fieldName='Time'
								icon={true}
								widthFull={false}
								textField={true}
								secondIcon={false}
								dateField={false}
								text={'Class'}
								placeHolder=''
							/>
						</div>
					</div>
				</div>

				<hr className='text-gray-100 mt-3' />

				<div className='flex items-center justify-center space-x-3 p-6 mt-3 m-auto'>
					<p className='font-thin text-3xl'>Price</p>
					<p className='text-5xl font-bold'>$230</p>
				</div>
			</div>

			<div className='flex items-center justify-center w-full space-x-3 mt-10'>
				<Button className='h-16 w-full rounded-xl bg-white border-2 border-orange-50 text-xl text-orange-50 font-bold'>
					Cancel
				</Button>
				<Button className='h-16 w-full rounded-xl bg-orange-50 text-white font-bold text-xl'>
					Confirm
				</Button>
			</div>
		</div>
	);
};

export default Card;
