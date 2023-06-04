import React from 'react';
import { InputPayment } from '../PaymentComponent/Input';
import Image from 'next/image';
import amex from '../../../../assets/amex.png';
import masterCard from '../../../../assets/mastercard.png';
import paypal from '../../../../assets/paypal.png';
import visa from '../../../../assets/visa.png';
import { BorderButton, DefaultButton } from '@/src/client/shared/Button';

const PaymentSection = () => {
	return (
		<div className='flex flex-col items-center justify-center p-6'>
			<form
				action=''
				className='w-full'>
				<div className='space-y-6'>
					<InputPayment
						inputName='Card Number'
						inputText='number'
						placeHolder='5300 0000 0000 0000'
					/>
					<InputPayment
						inputName='Card holder name'
						inputText='text'
						placeHolder='John Doe'
					/>
					<div className='flex flex-row justify-between space-x-4 w-full'>
						<InputPayment
							inputName='CVV'
							inputText='number'
							placeHolder='000'
						/>
						<InputPayment
							inputName='Expiry Date'
							inputText='text'
							placeHolder='05/24'
						/>
					</div>
					<div className='flex flex-row justify-start space-x-3 w-full'>
						<Image
							src={masterCard}
							alt='master card image'
							width={40}
						/>
						<Image
							src={visa}
							alt='master card image'
							width={40}
						/>
						<Image
							src={amex}
							alt='master card image'
							width={40}
						/>
						<Image
							src={paypal}
							alt='master card image'
							width={40}
						/>
					</div>
				</div>

				<div className='flex flex-col items-center justify-center space-y-4 mt-12'>
					<DefaultButton
						href='/boarding-pass'
						text='Confirm'
						height='h-16'
					/>
					<BorderButton
						href='/choose-seat'
						text='cancel'
						height='h-16'
					/>
				</div>
			</form>
		</div>
	);
};

export default PaymentSection;
