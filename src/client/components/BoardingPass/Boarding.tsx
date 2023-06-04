import { GenericUser } from '@heathmont/moon-icons-tw';
import { TravelTime, TravelDate } from '../../shared/TravelTime';
import SeatPosition from '../../shared/SeatPosition';
import { HrL } from '../../shared/HorizontalLine';
import { Barcode } from '../../../SVG/Barcode';
import { DefaultButton } from '../../shared/Button';

const Boarding = () => {
	return (
		<div className=''>
			<div className='flex flex-col items-center justify-between mt-10 space-y-5'>
				<div className='flex items-center justify-between w-full'>
					<div className='flex items-center space-x-2'>
						<div className='p-1 rounded-full border'>
							<GenericUser
								height={40}
								width={40}
							/>
						</div>
						<div>
							<div className='flex flex-col items-start justify-center'>
								<p className='font-bold'>Mr. John Doe</p>
								<p>Passenger</p>
							</div>
						</div>
					</div>
					<div className='border p-1 rounded-lg'>
						<p className='text-purple-600 font-bold text-2xl'>Indigo</p>
					</div>
				</div>

				<HrL />
				<div className='space-y-6'>
					<TravelTime />
					<TravelDate bgText='bg-gray-50' />
				</div>

				<HrL />
				<SeatPosition />
				<HrL />
				<div className='mt-4 mb-8'>
					<Barcode
						width='w-full'
						height='70'
					/>
				</div>
			</div>
			<DefaultButton
				href='#'
				text='Download'
				height='h-16'
			/>
			<p className='text-center text-orange-50 p-5 font-bold'>
				Book another flight
			</p>
		</div>
	);
};

export default Boarding;
