type Props = {
	width: string;
	height: string;
	color: string;
};

export const Travel = ({ width, height, color }: Props) => {
	return (
		<svg
			width={width}
			height={height}
			color={color}
			viewBox='0 0 25 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M4.50024 20V10C4.50024 8.93913 4.92167 7.92172 5.67182 7.17157C6.42196 6.42143 7.43938 6 8.50024 6H16.5002C17.5611 6 18.5785 6.42143 19.3287 7.17157C20.0788 7.92172 20.5002 8.93913 20.5002 10V20C20.5002 20.5304 20.2895 21.0391 19.9145 21.4142C19.5394 21.7893 19.0307 22 18.5002 22H6.50024C5.96981 22 5.4611 21.7893 5.08603 21.4142C4.71096 21.0391 4.50024 20.5304 4.50024 20V20Z'
				stroke='#191919'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M9.50024 6V4C9.50024 3.46957 9.71096 2.96086 10.086 2.58579C10.4611 2.21071 10.9698 2 11.5002 2H13.5002C14.0307 2 14.5394 2.21071 14.9145 2.58579C15.2895 2.96086 15.5002 3.46957 15.5002 4V6'
				stroke='#191919'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M8.50024 21V16C8.50024 15.4696 8.71096 14.9609 9.08603 14.5858C9.4611 14.2107 9.96981 14 10.5002 14H14.5002C15.0307 14 15.5394 14.2107 15.9145 14.5858C16.2895 14.9609 16.5002 15.4696 16.5002 16V21'
				stroke='#191919'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M8.50024 10H16.5002'
				stroke='#191919'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M8.50024 18H16.5002'
				stroke='#191919'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};
