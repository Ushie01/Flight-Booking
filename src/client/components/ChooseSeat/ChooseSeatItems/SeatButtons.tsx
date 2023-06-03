import Image from 'next/image';
import Frame from '../../../../assets/frame1.png';
import Link from 'next/link';
import { SelectSeatButton } from './Button';
import { LEFT_SEAT } from '@/src/client/constant/data';
import { RIGHT_SEAT } from '@/src/client/constant/data';
import { Button } from '@heathmont/moon-core-tw';

type Prop = {
	seatData: Array<string>;
};

const Seat = ({ seatData }: Prop) => {
	return (
		<div className='grid grid-cols-2 gap-5'>
			{seatData.map((v, index) => (
				<div key={index}>
					<SelectSeatButton
						text={v}
						bgColor={v.includes('5') ? 'bg-[#7C7270]' : 'bg-[#F5F8FD]'}
						textColor={v.includes('5') ? 'text-white' : 'text-black'}
					/>
				</div>
			))}
		</div>
	);
};

const SelectSeat = () => {
	return (
		<div className='flex flex-col items-center justify-center  intersect p-8 w-full'>
			<Image
				src={Frame}
				alt='Frame.png'
				className='w-[300px] h-full '
			/>
			<div className='flex flex-row items-center justify-between mt-12 space-x-28'>
				<Seat seatData={LEFT_SEAT} />
				<Seat seatData={ RIGHT_SEAT} />
			</div>
			<Link
				href='/personal-info'
				className='w-full '>
				<Button className='h-16 w-full rounded-xl bg-orange-50 mt-6 text-white font-bold text-xl'>
					Confirm
				</Button>
			</Link>
		</div>
	);
};

export default SelectSeat;
