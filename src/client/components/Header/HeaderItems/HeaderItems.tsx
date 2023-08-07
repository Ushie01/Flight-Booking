import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import {
	GenericBurgerRegular,
	ControlsChevronLeft,
	ControlsClose,
	GenericUser,
} from '@heathmont/moon-icons-tw';
import { IconButton } from '@heathmont/moon-core-tw';
import { HrL } from '@/src/client/shared/HorizontalLine';
import { MENU_DATA } from '@/src/client/constant/data';

type Prop = {
	backArrow: boolean;
	title: string;
};

const HeaderItems = ({ backArrow, title }: Prop) => {
	const [isOpen, setIsOpen] = useState(false);
	const handleToggle = () => setIsOpen(!isOpen);
	const router = useRouter();
	const pathname = router.pathname;

	const handleClick = () => {
		router.back();
	};

	return (
		<>
			<div className='flex flex-row items-center justify-between w-full'>
				{backArrow ? (
					<ControlsChevronLeft
						height={25}
						width={25}
						onClick={handleClick}
					/>
				) : (
					<div></div>
				)}
				<p
					className={`text-2xl font-semibold ${backArrow ? '' : 'ml-10'} ${
						pathname === '/home' ? '' : 'mr-10'
					}`}>
					{title}
				</p>

				{pathname === '/home' ? (
					<GenericBurgerRegular
						width={40}
						height={40}
						color='black'
						onClick={handleToggle}
					/>
				) : (
					<div></div>
				)}
			</div>

			<div
				onClick={handleToggle}
				className={`${
					!isOpen && 'hidden'
				} flex fixed top-0 left-0 w-full z-20 h-full bg-black/50`}
			/>

			<div
				className={`${
					isOpen ? 'translate-x-50' : 'hidden'
				} h-screen fixed top-0 right-0 transition-all p-6 opacity-100 z-20 bg-gray-50 w-2/3`}>
				<div className='flex items-start justify-start'>
					<IconButton onClick={handleToggle}>
						<ControlsClose />
					</IconButton>
				</div>
				<div className='space-y-6'>
					<div className='flex items-center space-x-2 mt-8'>
						<div className='p-1 rounded-full border'>
							<GenericUser
								height={30}
								width={30}
							/>
						</div>
						<div>
							<div className='flex flex-col items-start justify-center'>
								<p className='text-xs text-gray-700'>Hello</p>
								<p className='font-bold text-sm'>John Doe</p>
							</div>
						</div>
					</div>

					<HrL />

					<div className='flex flex-col items-start justify-start space-y-4 w-full'>
						{MENU_DATA.map((v, index) => (
							<div key={index}>
								{index === 4 && (
									<div className='mt-2 mb-4 w-full'>
										<HrL />
									</div>
								)}
								<Link
									href='#'
									className={`flex flex-row items-start justify-start ${
										index >= 4 ? 'space-x-3 text-sm' : 'space-x-4'
									}`}>
									<v.icon
										height='25'
										width='25'
										color='black'
									/>
									<p className='font-semibold'>{v.text}</p>
								</Link>
							</div>
						))}
					</div>
				</div>
				<p className='text-gray-500 font-thin mt-6 text-sm'>
					App version 1.0.1
				</p>
			</div>
		</>
	);
};

export default HeaderItems;
