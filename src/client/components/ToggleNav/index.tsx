import React, { useState, useEffect } from 'react';
type FlightType = 'oneWay' | 'round' | 'multicity';
type FormType = 'Email' | 'Phone Number';

export const ToggleNavbar = () => {
	const [flightType, setFlightType] = useState<FlightType>('oneWay');

	const handleClick = (type: FlightType) => {
		setFlightType(type);
	};

	useEffect(() => {
		setFlightType('oneWay');
	}, []);

	const getLiClassName = (type: FlightType) =>
		`flex items-center justify-center w-1/3 ${
			flightType === type ? 'bg-orange-50 text-white' : 'bg-white text-gray-400'
		} p-1 m-[0.5px] rounded-full text-center`;

	return (
		<ul className='flex w-80 rounded-full text-gray-400 p-1 bg-white mt-6'>
			<li
				className={getLiClassName('oneWay')}
				onClick={() => handleClick('oneWay')}>
				One Way
			</li>
			<li
				className={getLiClassName('round')}
				onClick={() => handleClick('round')}>
				Round
			</li>
			<li
				className={getLiClassName('multicity')}
				onClick={() => handleClick('multicity')}>
				Multicity
			</li>
		</ul>
	);
};


