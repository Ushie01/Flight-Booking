type Props = {
	children: React.ReactNode;
};

const SeatContainer = ({ children }: Props) => {
	return <div className='p-4 w-full bg-gray-50'>{children}</div>;
};

export default SeatContainer;
