import React from 'react'

type MapProps = {
    width: number;
    height: number;
}

export const Map = ({width, height}: MapProps) => {
    return (
			<svg
				width={width}
				height={height}
				viewBox='0 0 21 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M3 5L8 2.5L13 5L18 2.5V15L13 17.5L8 15L3 17.5V5Z'
					stroke='#666666'
					stroke-width='1.3'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M8 2.5V15'
					stroke='#666666'
					stroke-width='1.3'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M13 5V17.5'
					stroke='#666666'
					stroke-width='1.3'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>
		);
}


