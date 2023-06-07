import React from 'react';
type Props = {
    title: string;
    text: string | boolean;
}

export const Header = ({title, text}: Props) => {
	return (
		<header className='flex flex-col items-start justify-start'>
            <p className='text-3xl font-bold'>{ title}</p>
            <p className='text-gray-900 text-xl mt-5 w-[90%]'>{text}</p>
		</header>
	);
};


