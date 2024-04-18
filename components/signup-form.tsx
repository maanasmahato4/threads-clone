'use client';

import { z } from 'zod';

import { Input } from './input';
import { Button } from './ui/button';
import { ChangeEvent, FormEvent, useState } from 'react';
import { registerUser } from '@/lib/server-actions/auth-actions/auth-actions';

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
		accepted: z.boolean(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'password and confirm password does not match',
		path: ['confirmPassword'],
	})
	.refine((data) => data.accepted === false, {
		message: 'please accept terms and conditions',
		path: ['accepted'],
	});

type InputType = z.infer<typeof FormSchema> & {
	errors?: Record<string, string>;
};

export default function SignUpForm() {
	const [user, setUser] = useState<InputType>({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
		accepted: false,
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			FormSchema.parse(user);
			const result = await registerUser(user);
			console.log(result);
		} catch (error) {
			if (error instanceof z.ZodError) {
				// Extract error messages from the ZodError
				const errors = error.errors.reduce(
					(acc, curr) => {
						acc[curr.path[0]] = curr.message;
						return acc;
					},
					{} as Record<string, string>,
				);
				// Update the state with the error messages
				setUser({ ...user, errors });
			}
		}
	};
	return (
		<form className='flex flex-col gap-y-4' onSubmit={handleFormSubmit}>
			<Input
				id='username'
				label='Username'
				onChange={handleChange}
				value={user.username}
				type={'text'}
				name='username'
				errorMessage={user.errors?.username}
			/>
			<Input
				id='email'
				label='Email'
				onChange={handleChange}
				value={user.email}
				type={'text'}
				name='email'
				errorMessage={user.errors?.email}
			/>
			<Input
				id='password'
				label='Password'
				onChange={handleChange}
				value={user.password}
				type={'password'}
				name='password'
				errorMessage={user.errors?.password}
			/>
			<Input
				id='confirmpassword'
				label='Confirm Password'
				onChange={handleChange}
				value={user.confirmPassword}
				type={'password'}
				name='confirmPassword'
				errorMessage={user.errors?.confirmPassword}
			/>
			<div className='flex flex-row justify-between items-center'>
				<Button type='submit'>Submit</Button>
			</div>
		</form>
	);
}
