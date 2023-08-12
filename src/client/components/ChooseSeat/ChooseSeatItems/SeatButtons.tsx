import Image from 'next/image';
import { SelectSeatButton } from './Button';
import { LEFT_SEAT } from '@/src/client/constant/data';
import { RIGHT_SEAT } from '@/src/client/constant/data';
import { DefaultButton } from '@/src/client/shared/Button';
import Frame from '../../../../assets/Frame1.png';

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
		<div className='flex flex-col items-center justify-center bg-white rounded-t-full  p-4 w-full'>
			<Image
				src={Frame}
				alt='Frame.png'
				className='w-[300px] h-full mt-2'
			/>

			<div className='flex flex-row items-center justify-between mt-12 space-x-28'>
				<Seat seatData={LEFT_SEAT} />
				<Seat seatData={RIGHT_SEAT} />
			</div>

			<div className='mt-6 w-full'>
				<DefaultButton
					href='/personal-info'
					text='Confirm'
					height='h-16'
				/>
			</div>
		</div>
	);
};

export default SelectSeat;
