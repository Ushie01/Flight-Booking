type Props = {
	children: React.ReactNode;
};

const InfoContainer = ({ children }: Props) => {
	return <div className='p-4 w-full bg-white h-full'>{children}</div>;
};

export default InfoContainer;
