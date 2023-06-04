import { GenericUser, ControlsChevronDown } from '@heathmont/moon-icons-tw';
import { Input } from '../../../shared/InputField';
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
				className='mt-8 w-full space-y-5'>
				<div className='w-full'>
					<Input
						fieldName='Name'
						icon={
							<Name
								height={25}
								width={25}
							/>
						}
						widthFull={true}
						secondIcon={false}
						text={'Enter your name here'}
						dateField={false}
						textField={true}
						placeHolder='Enter your name here'
						bgText='white'
					/>
				</div>

				<div className='w-full'>
					<Input
						fieldName='Address'
						icon={
							<Map
								height={25}
								width={25}
							/>
						}
						widthFull={true}
						secondIcon={false}
						text={'Enter your name here'}
						dateField={false}
						textField={true}
						placeHolder='Enter your name here'
						bgText='white'
					/>
				</div>

				<div className='w-full'>
					<Input
						fieldName='Passport'
						icon={
							<Passport
								height={25}
								width={25}
							/>
						}
						widthFull={true}
						secondIcon={false}
						text={'Enter your name here'}
						dateField={false}
						textField={true}
						placeHolder='Enter your name here'
						bgText='white'
					/>
				</div>

				<div className='w-full'>
					<Input
						fieldName='DOB'
						icon={
							<Cake
								height={25}
								width={25}
							/>
						}
						widthFull={true}
						secondIcon={
							<Calender
								height={25}
								width={25}
							/>
						}
						text={'Enter your name here'}
						dateField={false}
						textField={true}
						placeHolder='Enter your name here'
						bgText='white'
					/>
				</div>

				<div className='w-full'>
					<Input
						fieldName='Country'
						icon={
							<Globe
								height={25}
								width={25}
							/>
						}
						widthFull={true}
						secondIcon={
							<ControlsChevronDown
								height={25}
								width={25}
							/>
						}
						text={'Enter your name here'}
						dateField={false}
						textField={true}
						placeHolder='Enter your name here'
						bgText='white'
					/>
				</div>
				<DefaultButton
					href='/payment'
					text='Confirm'
					height='h-16'
				/>
				<p className='text-orange-50 text-center text-xl'>Skip</p>
			</form>
		</div>
	);
};

export default FormInform;
