import { Button } from '@heathmont/moon-core-tw';
import { TravelTime, TravelDate } from '../../shared/TravelTime';

const Card = () => {
	// const [click, setClick] = useState(false);

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
				<TravelTime />
				<hr className='text-gray-100 mt-3' />
				<TravelDate />
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
