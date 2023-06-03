import React from 'react';

type Props = {
	children: React.ReactNode;
};

const BoardingContainer = ({ children }: Props) => {
	return <div className='p-5 w-full bg-gray-50 h-full'>{children}</div>;
};
export default BoardingContainer;
