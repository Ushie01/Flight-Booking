import { GenericUser, ControlsChevronDown } from '@heathmont/moon-icons-tw';
import { InputTextIcon, InputText } from '../../../shared/InputField';
import { Cake } from '@/src/SVG/Cake';
import { Globe } from '@/src/SVG/Globe';
import { Map } from '@/src/SVG/Map';
import { Name } from '@/src/SVG/Name';
import { Passport } from '@/src/SVG/Passport';
import { Calender } from '@/src/SVG/Calender';
import { DefaultButton } from '@/src/client/shared/Button';

const FormInform = () => {
	return (
		<div className='flex flex-col items-center justify-center p-5'>
			<div className='p-2 rounded-full border mt-8'>
				<GenericUser
					height={60}
					width={60}
				/>
			</div>
			<p className='mt-4 text-xl font-bold'>Hello Travellar</p>
			<form
				action=''
				className='mt-8 w-full space-y-7'>
				<InputTextIcon
					label='Name'
					icon={
						<Name
							height={25}
							width={25}
						/>
					}
					placeHolder='Enter your name here'
					secondIcon={false}
				/>

				<InputTextIcon
					label='Address'
					icon={
						<Map
							height={25}
							width={25}
						/>
					}
					placeHolder='Enter your address here'
					secondIcon={false}
				/>

				<InputTextIcon
					label='Password'
					icon={
						<Map
							height={25}
							width={25}
						/>
					}
					placeHolder='Ed 9839383'
					secondIcon={false}
				/>

				<InputTextIcon
					label='DOB'
					icon={
						<Cake
							height={25}
							width={25}
						/>
					}
					placeHolder='12/09/1990'
					secondIcon={
						<Calender
							height={25}
							width={25}
						/>
					}
				/>

				<InputTextIcon
					label='Country'
					icon={
						<Globe
							height={25}
							width={25}
						/>
					}
					placeHolder='Country'
					secondIcon={
						<ControlsChevronDown
							height={25}
							width={25}
						/>
					}
				/>

				<div className=''>
					<DefaultButton
						href='/payment'
						text='Confirm'
						height='h-16'
					/>
				</div>
				<p className='text-orange-50 text-center text-xl'>Skip</p>
			</form>
		</div>
	);
};

export default FormInform;
