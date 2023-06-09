import React from 'react';

type NameProps = {
	width: number;
	height: number;
}

export const Name = ({ width, height }: NameProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 21 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M12.375 8.75H15.5'
				stroke='#666666'
				stroke-width='1.3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M12.375 11.25H15.5'
				stroke='#666666'
				stroke-width='1.3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M7.69531 11.25C8.73085 11.25 9.57031 10.4105 9.57031 9.375C9.57031 8.33947 8.73085 7.5 7.69531 7.5C6.65978 7.5 5.82031 8.33947 5.82031 9.375C5.82031 10.4105 6.65978 11.25 7.69531 11.25Z'
				stroke='#666666'
				stroke-width='1.2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M5.27344 13.125C5.41113 12.5873 5.72388 12.1106 6.16238 11.7702C6.60089 11.4299 7.14021 11.2451 7.69531 11.2451C8.25042 11.2451 8.78974 11.4299 9.22824 11.7702C9.66675 12.1106 9.9795 12.5873 10.1172 13.125'
				stroke='#666666'
				stroke-width='1.2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M17.375 3.75H3.625C3.27982 3.75 3 4.02982 3 4.375V15.625C3 15.9702 3.27982 16.25 3.625 16.25H17.375C17.7202 16.25 18 15.9702 18 15.625V4.375C18 4.02982 17.7202 3.75 17.375 3.75Z'
				stroke='#666666'
				stroke-width='1.2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};


