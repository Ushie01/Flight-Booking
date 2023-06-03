type Props = {
	children: React.ReactNode;
};

const SearchContainer = ({ children }: Props) => {
	return <div className='p-4 w-full bg-gray-50 h-screen'>{children}</div>;
};

export default SearchContainer;
