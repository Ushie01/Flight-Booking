import React from 'react'

type Props = {
    inputName: string;
    inputText: string;
    placeHolder: string;
}

export const InputPayment = ({inputName, inputText, placeHolder}: Props) => {
  return (
		<div className='relative flex flex-col items-start justify-start'>
			<label
				htmlFor=''
				className='absolute font-bold'>
				{inputName}
			</label>
			<input
				type={inputText}
				placeholder={placeHolder}
				className='mt-3 h-16 text-xl bg-gray-60 w-full outline-none p-0'
			/>
			<hr className='-mt-1 w-full border border-[#D9D9D9]' />
		</div>
	);
}

