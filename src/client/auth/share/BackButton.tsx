import { ControlsChevronLeftSmall } from '@heathmont/moon-icons-tw';

export const BackButton = () => {
	return (
		<button className='flex flex-start items-start justify-start w-10 bg-gray-200 rounded-lg p-1'>
			<ControlsChevronLeftSmall
				width={30}
				height={30}
			/>
		</button>
	);
};
