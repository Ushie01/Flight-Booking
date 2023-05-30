type GlobeProp = {
    width: number;
    height: number;
}

export const Globe = ({width, height}: GlobeProp) => {
    return (
			<svg
				width={width}
				height={height}
				viewBox='0 0 21 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M10.5 18.3333C15.1024 18.3333 18.8333 14.6024 18.8333 10C18.8333 5.39763 15.1024 1.66667 10.5 1.66667C5.89762 1.66667 2.16666 5.39763 2.16666 10C2.16666 14.6024 5.89762 18.3333 10.5 18.3333Z'
					stroke='#666666'
					stroke-width='1.3'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M2.16666 10H18.8333'
					stroke='#666666'
					stroke-width='1.3'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M10.5 1.66667C12.5844 3.94863 13.769 6.91003 13.8333 10C13.769 13.09 12.5844 16.0514 10.5 18.3333C8.41559 16.0514 7.23103 13.09 7.16666 10C7.23103 6.91003 8.41559 3.94863 10.5 1.66667V1.66667Z'
					stroke='#666666'
					stroke-width='1.3'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>
		);
}