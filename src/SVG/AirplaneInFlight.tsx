type Props = {
	width: string;
	height: string;
	color: string;
};

export const AirplaneSvg = ({ width, height, color }: Props) => {
	return (
		<svg
			width={width}
			height={height}
			color={color}
			viewBox='0 0 25 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M7.25 20.25H20.75'
				stroke='white'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M3.01251 7.5H4.62501L6.50001 9.75H9.50001L8.32814 6.23438C8.29108 6.12172 8.28126 6.00188 8.29949 5.8847C8.31773 5.76751 8.36349 5.65632 8.43303 5.56025C8.50256 5.46418 8.59389 5.38597 8.69951 5.33204C8.80514 5.2781 8.92204 5.24999 9.04064 5.25H10.625L14.75 9.75H20C20.7957 9.75 21.5587 10.0661 22.1213 10.6287C22.6839 11.1913 23 11.9544 23 12.75V15H6.48126C5.83695 14.999 5.21008 14.7906 4.69341 14.4057C4.17675 14.0207 3.79775 13.4796 3.61251 12.8625L2.29064 8.46563C2.25693 8.35335 2.25002 8.23473 2.27045 8.11929C2.29088 8.00386 2.33808 7.89482 2.40827 7.80093C2.47846 7.70703 2.56969 7.6309 2.67462 7.57864C2.77956 7.52638 2.89529 7.49945 3.01251 7.5V7.5Z'
				stroke='white'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};
