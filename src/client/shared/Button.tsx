import React from 'react';
import Link from 'next/link';
import { Button } from '@heathmont/moon-core-tw';
import { G_Button } from '@/src/SVG/Google';

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
			<Button
				className={`${height} w-full rounded-xl bg-orange-50 text-white font-bold text-xl`}>
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
			<Button
				className={`${height} w-full rounded-xl bg-white border-2 border-orange-50 text-xl text-orange-50 font-bold`}>
				{text}
			</Button>
		</Link>
	);
};

export const GoogleButton = ({ href, text, height }: Props) => {
	return (
		<Link
			href={href}
			className='w-full '>
			<div className='flex flex-row items-center justify-center'>
				<Button
					className={`${height} w-full rounded-xl bg-gray-200 text-gray-600 space-x-1 font-bold text-md`}>
					<G_Button
						width='24'
						height='24'
					/>
					{text}
				</Button>
			</div>
		</Link>
	);
};
