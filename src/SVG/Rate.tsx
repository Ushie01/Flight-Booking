type Props = {
	width: string;
	height: string;
	color: string;
};

export const Rate = ({ width, height, color }: Props) => {
	return (
		<svg
			width={width}
			height={height}
			color={color}
			viewBox='0 0 25 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M12.5002 2L15.5902 8.26L22.5002 9.27L17.5002 14.14L18.6802 21.02L12.5002 17.77L6.32024 21.02L7.50024 14.14L2.50024 9.27L9.41024 8.26L12.5002 2Z'
				stroke='#191919'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};
