import React from 'react';
import Link from 'next/link';
import { Button } from '@heathmont/moon-core-tw';

type Props = {
	href: string;
	text: string;
	height: string;
};

export const DefaultButton = ({ href, text, height }: Props) => {
	return (
		<Link
			href={href}
			className='w-full '>
			<Button className={`${height} w-full rounded-xl bg-orange-50 mt-6 text-white font-bold text-xl`}>
				{text}
			</Button>
		</Link>
	);
};

export const BorderButton = ({ href, text, height }: Props) => {
	return (
		<Link
			href={href}
			className='w-full'>
			<Button className={`${height} w-full rounded-xl bg-white border-2 border-orange-50 text-xl text-orange-50 font-bold`}>
				{text}
			</Button>
		</Link>
	);
};
