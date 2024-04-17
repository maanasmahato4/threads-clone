'use client';

import { z } from 'zod';

import { Input } from './input';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';

const FormSchema = z
	.object({
		username: z
			.string()
			.min(6, 'username must be atleast 6 characters')
			.max(40, 'username must at max 40 characters')
			.regex(new RegExp('^[a-zA-Z]+$'), 'no special characters allowed'),
		email: z.string().email('please enter a valid email'),
		password: z
			.string()
			.min(6, 'Password must be at least 6 characters ')
			.max(50, 'Password must be less than 50 characters'),
		confirmPassword: z
			.string()
			.min(6, 'Password must be at least 6 characters ')
			.max(50, 'Password must be less than 50 characters'),
		accepted: z.literal(true, {
			errorMap: () => ({
				message: 'please accept all terms',
			}),
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'password and confirm password does not match',
		path: ['confirmPassword'],
	});

type InputType = z.infer<typeof FormSchema>;

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
