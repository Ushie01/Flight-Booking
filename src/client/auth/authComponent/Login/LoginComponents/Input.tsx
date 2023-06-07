import React from 'react';
import country from '../../../../../assets/coun.svg';
import CountrySelect from './Country';

type Props = {
	label: string;
	type: string;
	placeholder: string;
};

export const Input = ({ label, type, placeholder }: Props) => {
	return (
		<div className='flex flex-col w-full space-y-3'>
			<label className='font-semibold text-xl'>{label}</label>
			<input
				type={type}
				placeholder={placeholder}
				className='p-3 borderless-input text-xl border rounded-lg'
			/>
		</div>
	);
};

export const NumberInput = ({ label, type, placeholder }: Props) => {
	const countries = [
		{ name: 'United States', code: 'US', image: country},
		{ name: 'Canada', code: 'CA', image: country},
		{ name: 'United Kingdom', code: 'UK', image: country }
	];

	  const handleChange = (code: string) => {
			console.log(code);
	};
	
	return (
		<div className='flex flex-col w-full space-y-3'>
			<label className='font-semibold text-xl'>{label}</label>
			<div className='flex flex-row items-center justify-end  border space-x-2 rounded-lg'>
				<CountrySelect
					countries={countries}
					onChange={handleChange}
				/>
				<p className='font-extrabold '>|</p>
				<input
					type={type}
					placeholder={placeholder}
					className='p-3 borderless-input text-xl rounded-lg w-[70%] borderless-input'></input>
			</div>
		</div>
	);
};
