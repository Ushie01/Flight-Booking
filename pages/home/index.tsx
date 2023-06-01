import { useState } from 'react';
import Image from 'next/image';
import {
	GenericBurgerRegular,
	ArrowsSorting,
	TravelAirplaneUp,
	TravelAirplaneDown,
	ControlsPlus,
} from '@heathmont/moon-icons-tw';
import { ToggleNavbar } from '@/src/client/components/ToggleNav';
import { InputField, Input } from './../../src/client/shared/InputField';
import { Button } from '@heathmont/moon-core-tw';
import Frame from '../../src/assets/frame.png';
import Navbar from '@/src/client/components/Navbar';
import Header from '@/src/client/components/Header';

const Home = () => {
	const [objectOne, setObjectOne] = useState({
		state: 'Delhi',
		stateCode: 'DEL',
		airportName: 'Indira Gandhi International Airport',
	});
	const [objectTwo, setObjectTwo] = useState({
		state: 'Kolkata',
		stateCode: 'CCU',
		airportName: 'Subhash Chandra International Airport',
	});

	const handleSwitch = () => {
		const temp = { ...objectOne };
		setObjectOne({ ...objectTwo });
		setObjectTwo(temp);
	};

	return (
		<div className='bg-gray-50 p-4'>
			<div className='flex flex-col items-center justify-center'>
				<Header
					text='Book Flight'
					bool={false}
				/>
				<ToggleNavbar />

				<div className='p-4 bg-white rounded-lg mt-7 w-full shadow-lg'>
					<div className='relative w-full space-y-4'>
						<InputField
							fieldName='From'
							icon={
								<TravelAirplaneUp
									height={35}
									width={35}
									className='-mt-1'
								/>
							}
							state={objectOne.state}
							stateCode={objectOne.stateCode}
							airportName={objectOne.airportName}
						/>
						<div className='flex items-start justify-end'>
							<button
								onClick={handleSwitch}
								className='absolute border boder-2 rounded-full p-2 -mt-7 mr-5'>
								<ArrowsSorting
									height={40}
									width={40}
									className=''
								/>
							</button>
						</div>
						<InputField
							fieldName='To'
							icon={
								<TravelAirplaneDown
									height={35}
									width={35}
									className='-mt-1'
								/>
							}
							state={objectTwo.state}
							stateCode={objectTwo.stateCode}
							airportName={objectTwo.airportName}
						/>
					</div>

					<div className='mt-8'>
						<div className='flex flex-row items-center justify-between mt-4 space-x-4 w-full'>
							<div className='w-1/2'>
								<Input
									fieldName='Daparture'
									icon={false}
									widthFull={false}
									textField={false}
									secondIcon={false}
									dateField={true}
									text={''}
									placeHolder=''
								/>
							</div>
							<div className='w-1/2'>
								<Input
									fieldName='Return'
									icon={
										<ControlsPlus
											height={25}
											width={25}
										/>
									}
									widthFull={false}
									textField={false}
									secondIcon={false}
									dateField={true}
									text={''}
									placeHolder=''
								/>
							</div>
						</div>
					</div>

					<div className='mt-6'>
						<div className='flex flex-row items-center justify-between mt-4 space-x-4 w-full'>
							<div className='w-1/2'>
								<Input
									fieldName='Travelle'
									icon={false}
									widthFull={false}
									textField={true}
									secondIcon={false}
									dateField={false}
									text={'Travelle'}
									placeHolder=''
								/>
							</div>

							<div className='w-1/2'>
								<Input
									fieldName='Class'
									icon={false}
									widthFull={false}
									textField={true}
									secondIcon={false}
									dateField={false}
									text={'Class'}
									placeHolder=''
								/>
							</div>
						</div>
					</div>

					<Button
						color='orange'
						className='w-full bg-orange-50 text-bold mt-6 text-white rounded-xl'>
						Search
					</Button>
				</div>
			</div>
			<hr className='mt-7 border border-gray-200 w-full' />
			<p className='text-md font-extrabold mt-7'>Hot Offer</p>
			<div className='flex flex-row items-start justify-start rounded-lg mb-24 mt-5 bg-white'>
				<Image
					src={Frame}
					alt='Frame Image'
					width={120}
				/>
				<div className='flex flex-col items-start justify-start p-3 pt-2'>
					<p className='text-2xl font-extrabold'>
						15% Discount <br /> with mastercard
					</p>
					<p className='text-xl text-gray-500'>
						Lorem ipsum dolor <br /> sit am etet adip
					</p>
				</div>
			</div>
			<Navbar />
		</div>
	);
};

export default Home;
