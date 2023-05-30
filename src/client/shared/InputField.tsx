type fieldProps = {
	fieldName: string;
	icon: React.ReactNode;
	state: string;
	stateCode: string;
	airportName: string;
};

type dateProps = {
	fieldName: string;
	icon: React.ReactNode;
	widthFull: boolean;
	textField: boolean;
	secondIcon: React.ReactNode;
	dateField: boolean;
	text: string;
	placeHolder: string;
};

export const InputField = ({
	fieldName,
	icon,
	state,
	stateCode,
	airportName,
}: fieldProps) => {
	return (
		<div className='flex flex-row rounded-lg border'>
			<div className='flex flex-col items-start justify-center -mt-12 ml-2 w-2/12 p-2'>
				<p className='bg-white text-md p-1 text-gray-500'>{fieldName}</p>
				{icon}
			</div>
			<div className='flex flex-col items-start justify-start pt-3 pr-3 pb-3 w-10/12'>
				<div className='flex flex-row items-center justify-start'>
					<p className='font-extrabold text-xl'>{state}</p>
					<p className='text-gray-600 text-md ml-2 mt-1'>{stateCode}</p>
				</div>
				<input
					type='text'
					placeholder='Indira Gandhi International Airport'
					value={airportName}
					className='w-full'
				/>
			</div>
		</div>
	);
};

export const Input = ({
	fieldName,
	icon,
	widthFull,
	secondIcon,
	textField,
	dateField,
	text,
	placeHolder,
}: dateProps) => {
	return (
		<div
			className={`flex flex-col items-start justify-start border p-4 rounded-lg ${
				widthFull ? 'w-full' : ''
			}`}>
			<p className='bg-white text-md p-1 -mt-8 text-gray-500'>{fieldName}</p>
			<div className='flex flex-row items-center justify-between w-full space-x-1'>
				{icon ? icon : ''}
				{textField ? (
					<input
						type='text'
						className='text-md font-bold w-full borderless-input'
						placeholder={placeHolder ? placeHolder : ''}
						value={text}
					/>
				) : (
					''
				)}
				{dateField ? (
					<input
						type='date'
						className='text-sm font-bold'
					/>
				) : (
					''
				)}
				{secondIcon ? (
					secondIcon
				) : (
					''
				)}
			</div>
		</div>
	);
};
