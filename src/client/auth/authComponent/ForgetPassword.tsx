import React from 'react';
import { DefaultButton } from '../../shared/Button';
import AuthLayout from './authLayout';
import { BackButton } from '../share/BackButton';
import { Header } from '../share/Header';
import { Input } from './Login/LoginComponents/Input';


const ForgetPassword = () => {
	return (
		<AuthLayout>
			<BackButton />
			<Header
				title='Forgot Password?'
				text='Enter your email address to get the password reset link.'
			/>
			<Input
				type='text'
				label='Email Address'
				placeholder='hello@example.com'
			/>
			<div className='mt-5'>
				<DefaultButton
					href='#'
					text='Password Reset'
					height='h-12'
				/>
			</div>

			<p className='text-orange-50 text-center fixed bottom-10 font-bold left-0 right-0'>
				Create an account
			</p>
		</AuthLayout>
	);
};

export default ForgetPassword;
