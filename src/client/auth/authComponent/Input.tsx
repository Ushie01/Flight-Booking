import { title } from 'process';
import React from 'react'

type Props = {
    title: string;
    type: string;
    placeholder: string
}

export const Input = ({title, type, placeholder}: Props) => {
  return (
		<div className='flex flex-col w-full  space-y-3'>
          <label className='font-semibold text-md'>{title}</label>
			<input
				type={type}
				placeholder={placeholder}
				className='text-md p-3 borderless-input border rounded-lg'
			/>
		</div>
	);
}

