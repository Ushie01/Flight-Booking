import React, { useState } from 'react';
import { MapsMarker } from '@heathmont/moon-icons-tw';
import DatePicker from 'react-datepicker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-datepicker/dist/react-datepicker.css';

type fieldProps<T> = {
	fieldName: string;
	icon: React.ReactNode;
	state: string;
	stateCode: string;
	airportName: string;
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	uniqueValues: Array<T>;
};

type dateProps = {
	label: string;
	icon?: JSX.Element | boolean;
	secondIcon?: JSX.Element | boolean;
	bgText: string;
};

type inputTextIconProp = {
	label: string;
	icon?: JSX.Element | boolean;
	secondIcon?: JSX.Element | boolean;
	placeHolder: string;
};

type textProps = {
	label: string;
	placeHolder: string;
};

export const InputField = <T, > ({
	fieldName,
	icon,
	state,
	stateCode,
	value,
	onChange,
	uniqueValues,
}: fieldProps<T>) => {
	// console.log(uniqueValues);
	return (
		<div className='flex flex-row rounded-lg border'>
			<div className='flex flex-col items-start justify-start -mt-6 ml-2 w-2/12 p-2'>
				<p className='bg-white text-md p-1 text-gray-500'>{fieldName}</p>
				{icon}
			</div>
			<div className='flex flex-col items-start justify-start pt-3 pr-3 pb-3 w-10/12'>
				<div className='flex flex-row items-center justify-start'>
					<p className='font-extrabold text-xl'>{state}</p>
					<p className='text-gray-600 text-md ml-2 mt-1'>{stateCode}</p>
				</div>
				<div className='w-full'>
					<input
						type='text'
						placeholder='Indira Gandhi International Airport'
						value={value}
						onChange={onChange}
						className='w-full'
					/>
					{value ? (
						<div>
							<div className='flex flex-row item  p-1 border hover:bg-gray-100'>
								<MapsMarker
									height={23}
									width={23}
								/>
								<p>Indira Gandhi International</p>
							</div>
							<hr />
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
};

export const DateInput = ({ label, icon, secondIcon, bgText }: dateProps) => {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());
	const handleDateChange = (date: Date) => {
		setSelectedDate(date);
	};

	return (
		<div className='flex flex-col  items-start justify-center w-full h-16 p-3 space-y-2 rounded-xl border'>
			<p className={`pl-2 pr-2 -mt-8 ${bgText}`}>{label}</p>
			<div className='flex flex-row items-start justify-center w-full  space-x-3 pl-2'>
				{icon}
				<DatePicker
					selected={selectedDate || undefined}
					onChange={handleDateChange}
					className={`w-[100%]  ${bgText} borderless-input`}
				/>
				{secondIcon ? secondIcon : ''}
			</div>
		</div>
	);
};

export const InputTextIcon = ({
	label,
	icon,
	secondIcon,
	placeHolder,
}: inputTextIconProp) => {
	return (
		<div className='flex flex-col  items-start justify-center w-full h-16 p-3 space-y-2 rounded-xl border'>
			<p className=' bg-white pl-2 pr-2 -mt-8'>{label}</p>
			<div className='flex flex-row items-start justify-start w-full  space-x-3 pl-2'>
				{icon}
				<input
					type='text'
					placeholder={placeHolder}
					className='w-[100%]'
				/>
				{secondIcon ? secondIcon : ''}
			</div>
		</div>
	);
};

export const InputText = ({ label, placeHolder }: textProps) => {
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
};
