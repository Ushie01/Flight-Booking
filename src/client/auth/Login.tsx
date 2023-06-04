import React from 'react';
import { Input } from '../auth/authComponent/Input';
import { Checkbox } from '@heathmont/moon-core-tw';


const Login = () => {
	return (
		<div className='p-4'>
			<header className='flex flex-col items-start justify-start'>
				<p className='text-3xl font-bold'>Login</p>
				<p className='text-gray-900 mt-5'>Welcome back To The App</p>
			</header>

			<div className='flex flex-col items-start justify-start mt-12 space-y-6'>
				<div className='flex flex-row items-start justify-start  space-x-6'>
					<p>Email</p>
					<p>Phone Number</p>
        </div>
        
				<Input
					type='text'
					placeholder='hello@example.com'
					title='Email Address'
        />
        
				<Input
					type='password'
					placeholder='********'
					title='Password'
				/>

				<Checkbox
					label='Keep me signed in'
					id='withLabel'
          className='bg-orange-50 text-white rounded-lg'
				/>
			</div>
		</div>
	);
};

export default Login;
