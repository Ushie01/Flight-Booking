import { FlightTravel } from "@/src/client/shared/FlightTravel";
import { Calender } from "@/src/SVG/Calender";



const ViewPayemt = () => {
  return (
		<div className='flex flex-col items-center justify-center w-full bg-[#D9D9D9]'>
			<div className='flex flex-row justify-between w-full p-6'>
				<p className='text-2xl font-bold text-purple-600'>Indigo</p>
				<div className='flex flex-row  items-end justify-end space-x-2'>
					<Calender
						height={26}
						width={26}
					/>
					<p className='text-black text-xl'>15/12/2023</p>
				</div>
			</div>

			<hr className='text-gray-900 w-full' />

			<div className='flex flex-row justify-between w-full p-6'>
				<div className='flex flex-col'>
					<p className='text-3xl font-extrabold text-black'>5.50</p>
					<p className='text-2xl'>DEL</p>
				</div>

				<FlightTravel />

				<div className='flex flex-col justify-end'>
					<p className='text-3xl font-extrabold text-black'>5.50</p>
					<p className='text-2xl'>DEL</p>
				</div>
			</div>

			<hr className='text-gray-900 w-full' />
			
			<div className="flex flex-row items-center justify-between w-full p-6">
				<p className="text-xl">Total</p>
				<p className="text-orange-50 font-extrabold text-3xl">$230</p>
			</div>
		</div>
	);
}

export default ViewPayemt;

