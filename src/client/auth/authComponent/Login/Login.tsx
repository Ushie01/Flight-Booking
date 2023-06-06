import { Input } from '../Input';
import { Checkbox } from '@heathmont/moon-core-tw';
import { DefaultButton, GoogleButton } from '../../../shared/Button';
import { HrL } from '../../../shared/HorizontalLine';
import { FormOption } from './LoginComponents/FormOption';
import { useState } from 'react';

const Login = () => {

	return (
		<div className='p-6 mt-10'>
			<header className='flex flex-col items-start justify-start'>
				<p className='text-3xl font-bold'>Login</p>
				<p className='text-gray-900 text-xl mt-5'>Welcome back to the app</p>
			</header>

			<div className='flex flex-col items-start justify-start mt-12 space-y-6'>
				<FormOption />

				<Input
					type='text'
					placeholder='hello@example.com'
					title='Email Address'
				/>
				<Input
					type='password'
					placeholder='**********'
					title='Password'
				/>

				<Checkbox
					label='Keep me signed in'
					id='withLabel'
					className='bg-orange-50 text-white rounded-lg'
				/>

				<DefaultButton
					text='Login'
					height='h-12'
					href='#'
				/>

				<div className='flex flex-row items-center justify-center w-full'>
					<HrL />
					<p className='text-gray-400 text-center w-full'>or sign in with</p>
					<HrL />
				</div>

				<GoogleButton
					href='#'
					text='Continue with Google'
					height='h-12'
				/>

				<p className='text-orange-50 font-bold m-auto'>Create an account</p>
			</div>
		</div>
	);
};

export default Login;
