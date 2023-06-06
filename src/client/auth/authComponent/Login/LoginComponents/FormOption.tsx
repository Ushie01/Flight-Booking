import React, { useState, useEffect } from 'react';
type FormType = 'Email' | 'Phone Number';


export const FormOption = () => {
	const [formType, setFormType] = useState<FormType>('Email');

	const onHandleClick = (type: FormType) => {
		setFormType(type);
    };
    

	useEffect(() => {
		setFormType('Email');
	}, []);

	const getClass = (type: FormType) =>
		`${formType === type ? 'w-6 h-1 bg-orange-50' : ''}`;

	const getBgClass = (type: FormType) =>
		`${formType === type ? 'text-orange-50' : ''}`;

	return (
		<div className='flex flex-row items-start justify-start text-xl space-x-6 '>
			<div
				className={`flex flex-col items-center justify-center space-y-2 ${getBgClass(
					'Email'
				)}`}
				onClick={() => onHandleClick('Email')}>
				<p>Email</p>
				<hr className={getClass('Email')} />
			</div>
			<div
				className={`flex flex-col items-center justify-center space-y-2 ${getBgClass(
					'Phone Number'
				)}`}
				onClick={() => onHandleClick('Phone Number')}>
				<p>Phone Number</p>
				<hr className={getClass('Phone Number')} />
			</div>
		</div>
	);
};
