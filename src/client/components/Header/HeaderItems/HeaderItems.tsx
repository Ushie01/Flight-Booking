import {
	GenericBurgerRegular,
	ControlsChevronLeft,
} from '@heathmont/moon-icons-tw';

type Prop = {
	image: boolean;
	title: string;
};

const HeaderItems = ({ image, title }: Prop) => {
	return (
		<div className='flex flex-row items-center justify-between w-full'>
			{image ? (
				<ControlsChevronLeft
					height={25}
					width={25}
				/>
			) : (
				<div></div>
			)}
			<p className={`text-2xl font-semibold ${image ? '' : 'ml-10'}`}>
				{title}
			</p>
			<GenericBurgerRegular
				width={40}
				height={40}
				color='black'
			/>
		</div>
	);
};

export default HeaderItems;
