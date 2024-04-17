'use client';

import { Input } from './input';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';

export default function SignUpForm() {
	const handleFormSubmit = async () => {};
	return (
		<form className='flex flex-col gap-y-4' onSubmit={handleFormSubmit}>
			<Input
				id='username'
				label='Username'
				onChange={() => {}}
				value={''}
				type={'text'}
			/>
			<Input
				id='email'
				label='Email'
				onChange={() => {}}
				value={''}
				type={'text'}
			/>
			<Input
				id='password'
				label='Password'
				onChange={() => {}}
				value={''}
				type={'password'}
			/>
			<Input
				id='password'
				label='Confirm Password'
				onChange={() => {}}
				value={''}
				type={'password'}
			/>
			<div className='flex flex-row justify-between items-center'>
				<div className='flex items-center space-x-2'>
					<Checkbox id='terms' />
					<label
						htmlFor='terms'
						className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
					>
						Accept terms and conditions
					</label>
				</div>
				<Button type='submit'>Submit</Button>
			</div>
		</form>
	);
}
