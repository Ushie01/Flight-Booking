import Image from 'next/image';
import Frame from '../../../../assets/frame1.png';
import Intersect from '../../../../assets/Intersect.png';
import { SelectSeatButton } from './Button';
import { LEFT_SEAT } from '@/src/client/constant/data';
import { RIGHT_SEAT } from '@/src/client/constant/data';

const SelectSeat = () => {

    return (
        <div className='relative flex items-center justify-center'>
            <div>
                <Image src={Intersect} alt="Intersect.png" className='h-full w-[900px]'/>
            </div>
            <div className='absolute p-2'>
                <div className='p-2'>
                    <Image src={Frame} alt='Frame.png' className='w-[300px] h-full' />
                </div>
                <div className='flex flex-row items-center justify-between mt-8'>
                    <div className="grid grid-cols-2 gap-5">
                        {LEFT_SEAT.map((v, index) => (
                            <div key={index}>
                                <SelectSeatButton
                                    text={v}
                                    bgColor={v.includes('5') ? 'bg-[#7C7270]' : 'bg-[#F5F8FD]'}
                                    textColor={v.includes('5') ? 'text-white' : 'text-black'}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        {RIGHT_SEAT.map((v, index) => (
                            <div key={index}>
                                <SelectSeatButton
                                    text={v}
                                    bgColor={v.includes('5') ? 'bg-[#7C7270]' : 'bg-[#F5F8FD]'}
                                    textColor={v.includes('5') ? 'text-white' : 'text-black'}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectSeat;