import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


type fieldProps = {
	fieldName: string;
	icon: React.ReactNode;
	state: string;
	stateCode: string;
	airportName: string;
};

type dateProps = {
	label: string;
	icon: React.ReactNode;
	secondIcon: React.ReactNode | boolean;
}

type textProps = {
	label: string;
	placeHolder: string;
}

export const InputField = ({
	fieldName,
	icon,
	state,
	stateCode,
	airportName,
}: fieldProps) => {
	return (
		<div className='flex flex-row rounded-lg border'>
			<div className='flex flex-col items-start justify-center -mt-12 ml-2 w-2/12 p-2'>
				<p className='bg-white text-md p-1 text-gray-500'>{fieldName}</p>
				{icon}
			</div>
			<div className='flex flex-col items-start justify-start pt-3 pr-3 pb-3 w-10/12'>
				<div className='flex flex-row items-center justify-start'>
					<p className='font-extrabold text-xl'>{state}</p>
					<p className='text-gray-600 text-md ml-2 mt-1'>{stateCode}</p>
				</div>
				<input
					type='text'
					placeholder='Indira Gandhi International Airport'
					value={airportName}
					className='w-full'
				/>
			</div>
		</div>
	);
};

export const InputIcon = ({label, icon, secondIcon}: dateProps) => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};

	return (
		<div className='flex flex-col  items-start justify-center w-full h-16 p-3 space-y-2 rounded-xl border'>
			<p className=' bg-white pl-2 pr-2 -mt-8'>{label}</p>
			<div className='flex flex-row items-start justify-center w-full  space-x-3 pl-2'>
				{icon ? icon : ""}
				<DatePicker
					selected={selectedDate}
					onChange={handleDateChange}
					className='w-[100%]'
				/>
				{secondIcon ? secondIcon : ""}
			</div>
		</div>
	);
};


export const InputText = ({label, placeHolder}: textProps) => {
	return (
		<div>
			<div className='flex flex-col  items-start justify-center w-full h-16 p-3 space-y-2 rounded-xl border'>
				<p className=' bg-white pl-2 pr-2 -mt-8'>{label}</p>
				<div className='pl-2'>
					<input
						type='text'
						placeholder={placeHolder}
						className='w-[100%] '
					/>
				</div>
			</div>
		</div>
	);
}