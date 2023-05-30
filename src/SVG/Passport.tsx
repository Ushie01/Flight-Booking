type PasswordProps = {
	width: number;
	height: number;
};

export const Passport = ({ width, height }: PasswordProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 21 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M4.66666 4.16667L13.8333 1.66667V4.16667M4.66666 4.16667H16.3333V18.3333H4.66666V4.16667Z'
				stroke='#666666'
				stroke-width='1.3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M10.5 11.6667C11.4205 11.6667 12.1666 10.9205 12.1666 10C12.1666 9.07953 11.4205 8.33333 10.5 8.33333C9.57951 8.33333 8.83331 9.07953 8.83331 10C8.83331 10.9205 9.57951 11.6667 10.5 11.6667Z'
				stroke='#666666'
				stroke-width='1.3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M8.83331 14.1667H12.1666'
				stroke='#666666'
				stroke-width='1.3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};
