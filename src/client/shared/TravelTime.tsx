import React from 'react';
import { FlightTravel } from './FlightTravel';
import { Input } from './InputField';


export const TravelTime = () => {
    return (
        <div className='mt-4'>
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
                <p className='text-start w-2/5'>Indira Gandhi International Airport</p>
                <p className='text-end w-2/5'>
                    Subhash Chandra Bose International Airport
                </p>
            </div>
        </div>
    );
};

export const TravelDate = () => {
    return (
			<div className='mt-3'>
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
		);
}

