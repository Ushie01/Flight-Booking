type Props = {
	width: string;
	height: string;
	color: string;
};

export const Bank = ({ width, height, color }: Props) => {
	return (
		<svg
			width={width}
			height={height}
			color={color}
			viewBox='0 0 25 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M3.50024 22H21.5002'
				stroke='#191919'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M6.50024 18V11'
				stroke='#191919'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M10.5002 18V11'
				stroke='#191919'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M14.5002 18V11'
				stroke='#191919'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M18.5002 18V11'
				stroke='#191919'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M12.5002 2L20.5002 7H4.50024L12.5002 2Z'
				stroke='#191919'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};
