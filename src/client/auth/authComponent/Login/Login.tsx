import { useState } from 'react';
import { Input, NumberInput } from './LoginComponents/Input';
import { Checkbox } from '@heathmont/moon-core-tw';
import { DefaultButton, GoogleButton } from '../../../shared/Button';
import { HrL } from '../../../shared/HorizontalLine';
import { FormOption } from './LoginComponents/FormOption';
import { Header } from '../../share/Header';
import AuthLayout from '../authLayout';

const Login = () => {
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
			</AuthLayout>
	);
};

export default Login;
