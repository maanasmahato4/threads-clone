'use client';

import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback, AvatarImage } from '../ui/avatar';
import { TUser } from '@/@types/index';
import React from 'react';
import { Button } from '../ui/button';

const CreateThreadForm: React.FC<{ user: TUser }> = ({ user }) => {
	return (
		<form className='flex flex-col justify-between gap-y-8'>
			<div className='flex flex-row gap-x-4'>
				<Avatar>
					<AvatarImage src={user.image} />
					<AvatarFallback className='p-2'>
						{user.username.substring(0, 2).toLocaleUpperCase()}
					</AvatarFallback>
				</Avatar>
				<input
					type='text'
					className='bg-transparent border-none outline-none w-full'
					placeholder='Start a thread...'
				/>
			</div>
			<div className='flex justify-end'>
				<Button>Post</Button>
			</div>
		</form>
	);
};

export default CreateThreadForm;
