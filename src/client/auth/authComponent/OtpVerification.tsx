import React from 'react';
import ReactInputVerificationCode from 'react-input-verification-code';
import { DefaultButton } from '../../shared/Button';
import AuthLayout from './authLayout';
import { BackButton } from '../share/BackButton';
import { Header } from '../share/Header';


const OtpVerification = () => {
	return (
		<AuthLayout>
				<BackButton />
				<Header
					title='OTP Verification'
					text='Enter the verification code we just on your phone number'
				/>
				<div className='flex flex-col items-center justify-center space-y-16'>
					<ReactInputVerificationCode />
					<DefaultButton
						href='#'
						text='Verify'
						height='h-12'
					/>
					<div className='text-center'>
						<p>Resend OTP in 23s</p>
						<p className='text-gray-400 mt-3'>Resend OTP</p>
					</div>
				</div>
		</AuthLayout>
	);
};

export default OtpVerification;
