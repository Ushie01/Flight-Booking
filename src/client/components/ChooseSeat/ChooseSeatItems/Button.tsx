import { useState } from 'react';

type Props = {
	text: string;
	bgColor: string;
	textColor: string;
};

export const SelectSeatButton = ({ text, bgColor, textColor }: Props) => {
	const [click, setClick] = useState(false);
	const [color, setColor] = useState(false);

	const handleClick = () => {
		setClick(true);
		setColor(!color);
		setTimeout(() => {
			setClick(false);
		}, 200);
	};

	return (
		<button
			onClick={handleClick}
			className={`${
				click ? 'scale-75 duration-150 text-white' : ''
			} p-3 rounded-md ${
				color ? 'bg-orange-50 text-white' : bgColor
			} ${textColor} font-bold shadow-md`}>
			{text}
		</button>
	);
};
