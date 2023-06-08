import { useState } from 'react';
import { Checkbox } from '@heathmont/moon-core-tw';
import AuthLayout from './authLayout';
import { Header } from '../share/Header';
import { FormOption } from './Login/LoginComponents/FormOption';
import { Input, NumberInput } from './Login/LoginComponents/Input';
import { DefaultButton, GoogleButton } from '../../shared/Button';
import { HrL } from '../../shared/HorizontalLine';


const CreateAcct = () => {

	return (
		<AuthLayout>
			<div></div>
			<Header
				title='Create an Account'
				text={false}
			/>

			<div className='flex flex-col items-start justify-start mt-12 space-y-6'>
				<Input
					type='text'
					placeholder='John Doe'
					label='Name'
				/>
				<Input
					type='email'
					placeholder='hello@example.com'
					label='Email Address'
				/>
				<Input
					type='password'
					placeholder='**********'
					label='Password'
				/>

				<p className='text-gray-400'>
					By continuning you agree to our
					<span className='text-orange-50'> Team and Service.</span>
				</p>

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
			</div>
			<div className='mt-7 text-center'>
				<p className='font-bold'>
					Already have an account?
					<span className='text-orange-50'> Sign in here</span>
				</p>
			</div>
		</AuthLayout>
	);
};

export default CreateAcct;
