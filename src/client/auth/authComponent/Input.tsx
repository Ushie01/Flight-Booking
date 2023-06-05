import React from 'react'

type Props = {
    title: string;
    type: string;
    placeholder: string
}

export const Input = ({title, type, placeholder}: Props) => {
  return (
		<div className='flex flex-col w-full space-y-3'>
          <label className='font-semibold text-xl'>{title}</label>
			<input
				type={type}
				placeholder={placeholder}
				className='p-3 borderless-input text-xl border rounded-lg'
			/>
		</div>
	);
}

