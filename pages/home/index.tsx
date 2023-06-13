import { useState } from 'react';
import { Calender } from '@/src/SVG/Calender';
import Image from 'next/image';
import dotenv from 'dotenv';
import { useGetAirportsQuery } from '@/src/store';
import {
	ArrowsSorting,
	TravelAirplaneUp,
	TravelAirplaneDown,
	ControlsPlus,
} from '@heathmont/moon-icons-tw';
import { ToggleNavbar } from '@/src/client/components/ToggleNav';
import { InputField, DateInput, InputText } from './../../src/client/shared/InputField';
import { DefaultButton } from '@/src/client/shared/Button';
import Frame from '../../src/assets/frame.png';
import Navbar from '@/src/client/components/Navbar';
import Header from '@/src/client/components/Header';
dotenv.config();


type Airport = {
	airport_name: string;
	city: string;
	iata: string
}


const Home = () => {
	const { data, error, isLoading } = useGetAirportsQuery();
	const [destination, setDestination] = useState('');
	const [arrival, setArrival] = useState('');

	console.log(data, error, isLoading);

	let uniqueValues: {
		airportName: string;
		iata: string;
		city: string;
	}[] = [];

	if (data?.length > 0) {
		uniqueValues = data?.filter((value: Airport) =>
				value.airportName?.toLowerCase().includes(destination?.toLowerCase())
			)
			.map((value: Airport) => ({
				airportName: value.airportName,
				iata: value.iata,
				city: value.city,
			}));
	}

	console.log(uniqueValues);
	
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
					title='Book Flight'
					backArrow={false}
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
							value={destination}
							uniqueValues={uniqueValues}
							onChange={(e) => setDestination(e.target.value)}
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
							uniqueValues={uniqueValues}
							value={arrival}
							onChange={(e) => setArrival(e.target.value)}
							state={objectTwo.state}
							stateCode={objectTwo.stateCode}
							airportName={objectTwo.airportName}
						/>
					</div>

					<div className='mt-8 space-y-6'>
						<div className='flex flex-row items-center justify-between space-x-4'>
							<DateInput
								label='Departure'
								icon={
									<Calender
										height={25}
										width={25}
									/>
								}
								secondIcon={false}
								bgText='bg-white'
							/>
							<DateInput
								label='Return'
								icon={
									<ControlsPlus
										height={25}
										width={25}
									/>
								}
								secondIcon={false}
								bgText='bg-white'
							/>
						</div>

						<div className='flex flex-row items-center justify-between space-x-4'>
							<InputText
								label='Traveller'
								placeHolder='1 Adult'
							/>
							<InputText
								label='Class'
								placeHolder='Economy'
							/>
						</div>
					</div>
					<div className='mt-6'>
						<DefaultButton
							href='/search-result'
							text='Search'
							height='h-16'
						/>
					</div>
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
