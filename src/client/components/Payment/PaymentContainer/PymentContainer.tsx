type Props = {
	children: React.ReactNode;
};

const PaymentContainer = ({ children }: Props) => {
	return <div className='w-full bg-gray-60 h-full'>{children}</div>;
};

export default PaymentContainer;
