import React from 'react'

type Props = {
	width: number;
	height: number;
};

export const Calender = ({ width, height }: Props) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 21 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M16.3333 3.33334H4.66667C3.74619 3.33334 3 4.07953 3 5V16.6667C3 17.5871 3.74619 18.3333 4.66667 18.3333H16.3333C17.2538 18.3333 18 17.5871 18 16.6667V5C18 4.07953 17.2538 3.33334 16.3333 3.33334Z'
				stroke='#555555'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M13.8333 1.66666V5'
				stroke='#555555'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M7.16669 1.66666V5'
				stroke='#555555'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M3 8.33334H18'
				stroke='#555555'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M7.16669 11.6667H7.17502'
				stroke='#555555'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M10.5 11.6667H10.5083'
				stroke='#555555'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M13.8333 11.6667H13.8416'
				stroke='#555555'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M7.16669 15H7.17502'
				stroke='#555555'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M10.5 15H10.5083'
				stroke='#555555'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M13.8333 15H13.8416'
				stroke='#555555'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};

