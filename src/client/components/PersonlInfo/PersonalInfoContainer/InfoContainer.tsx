type Props = {
	children: React.ReactNode;
};

const InfoContainer = ({ children }: Props) => {
	return <div className='p-4 w-full bg-white'>{children}</div>;
};

export default InfoContainer;
