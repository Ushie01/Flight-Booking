type Props = {
	width: string;
	height: string;
	color: string;
};

export const Hotel = ({ width, height, color }: Props) => {
	return (
		<svg
			width={width}
			height={height}
			color={color}
			viewBox='0 0 25 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M2.50024 20V12C2.50024 11.4696 2.71096 10.9609 3.08603 10.5858C3.4611 10.2107 3.96981 10 4.50024 10H20.5002C21.0307 10 21.5394 10.2107 21.9145 10.5858C22.2895 10.9609 22.5002 11.4696 22.5002 12V20'
				stroke='#191919'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M4.50024 10V6C4.50024 5.46957 4.71096 4.96086 5.08603 4.58579C5.4611 4.21071 5.96981 4 6.50024 4H18.5002C19.0307 4 19.5394 4.21071 19.9145 4.58579C20.2895 4.96086 20.5002 5.46957 20.5002 6V10'
				stroke='#191919'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M12.5002 4V10'
				stroke='#191919'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M2.50024 18H22.5002'
				stroke='#191919'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};
