type Props = {
	width: string;
	height: string;
	color: string;
};

export const Bookings = ({ width, height, color }: Props) => {
	return (
		<svg
			width={width}
			height={height}
			color={color}
			viewBox='0 0 25 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M15.5002 2H9.50024C8.94796 2 8.50024 2.44772 8.50024 3V5C8.50024 5.55228 8.94796 6 9.50024 6H15.5002C16.0525 6 16.5002 5.55228 16.5002 5V3C16.5002 2.44772 16.0525 2 15.5002 2Z'
				stroke='#191919'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M16.5002 4H18.5002C19.0307 4 19.5394 4.21071 19.9145 4.58579C20.2895 4.96086 20.5002 5.46957 20.5002 6V20C20.5002 20.5304 20.2895 21.0391 19.9145 21.4142C19.5394 21.7893 19.0307 22 18.5002 22H6.50024C5.96981 22 5.4611 21.7893 5.08603 21.4142C4.71096 21.0391 4.50024 20.5304 4.50024 20V6C4.50024 5.46957 4.71096 4.96086 5.08603 4.58579C5.4611 4.21071 5.96981 4 6.50024 4H8.50024'
				stroke='#191919'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12.5002 11H16.5002'
				stroke='#191919'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12.5002 16H16.5002'
				stroke='#191919'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8.50024 11H8.51024'
				stroke='#191919'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8.50024 16H8.51024'
				stroke='#191919'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};
