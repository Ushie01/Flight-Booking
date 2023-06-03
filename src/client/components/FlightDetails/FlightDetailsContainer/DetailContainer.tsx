import React from 'react';

type Props = {
	children: React.ReactNode;
};

const DetailContainer = ({ children }: Props) => {
	return <div className='p-4 w-full bg-gray-50 h-full'>{children}</div>;
};

export default DetailContainer;
