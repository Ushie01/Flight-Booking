import { GenericUser } from '@heathmont/moon-icons-tw';
import { TravelTime, TravelDate } from '../../shared/TravelTime';
import SeatPosition from '../../shared/SeatPosition';
import { HrL } from '../../shared/HorizontalLine';
import { Barcode } from '../../shared/Barcode';
import { Button } from '@heathmont/moon-core-tw';


const Boarding = () => {
	return (
		<div className='flex flex-col items-center justify-between mt-10'>
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
			<TravelTime />
			<TravelDate />
			<HrL />
			<SeatPosition />
			<HrL />
			<div className='mt-4 mb-8'>
				<Barcode
					width='w-full'
					height='70'
				/>
			</div>
			<Button className='h-16 w-full rounded-xl bg-orange-50 text-white font-bold text-xl'>
				Download
			</Button>
			<p className='text-center text-orange-50 p-5 font-bold'>Book another flight</p>
		</div>
	);
};

export default Boarding;
