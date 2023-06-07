import { useState } from 'react';
import { Checkbox } from '@heathmont/moon-core-tw';
import AuthLayout from './authLayout';
import { Header } from '../share/Header';
import { FormOption } from './Login/LoginComponents/FormOption';
import { Input, NumberInput } from './Login/LoginComponents/Input';
import { DefaultButton, GoogleButton } from '../../shared/Button';
import { HrL } from '../../shared/HorizontalLine';


const CreateAcct = () => {
	const [click, setClick] = useState('Email');

	return (
		<AuthLayout>
			<div></div>
			<Header
				title='Login'
				text='Welcome back to the app'
			/>

			<div className='flex flex-col items-start justify-start mt-12 space-y-6'>
				<FormOption setClick={setClick} />

				{click === 'Email' ? (
					<Input
						type='text'
						placeholder='hello@example.com'
						label='Email Address'
					/>
				) : (
					<NumberInput
						type='number'
						placeholder='09122883377'
						label='Phone Number'
					/>
				)}
				<Input
					type='password'
					placeholder='**********'
					label='Password'
				/>

				<p className='text-gray-400'>By continuning you agree to our,<span className='text-orange-50'> Team and Services</span></p>

				<DefaultButton
					text='Sign up'
					height='h-12'
					href='#'
				/>

				<div className='flex flex-row items-center justify-center w-full'>
					<HrL />
					<p className='text-gray-400 text-center w-full'>or</p>
					<HrL />
				</div>

				<GoogleButton
					href='#'
					text='Continue with Google'
					height='h-12'
				/>

				<p className='text-orange-50 font-bold m-auto'>Already have an account? </p>
			</div>
		</AuthLayout>
	);
};

export default CreateAcct;
