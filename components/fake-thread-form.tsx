'use client';

import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback, AvatarImage } from './ui/avatar';
import { TUser } from '@/@types';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function FakeThreadForm({ user }: { user: TUser }) {
	const router = useRouter();
	function RedirectToCreateThread() {
		router.push('/create');
	}
	return (
		<div>
			<div
				className='flex hover:cursor-pointer flex-row justify-between gap-y-8 my-4 py-4 w-[60%] mx-auto border-b-[1px] border-gray-600'
				onClick={RedirectToCreateThread}
			>
				<div className='flex flex-row gap-x-4 items-center'>
					<Avatar>
						<AvatarImage src={user.image} />
						<AvatarFallback className='p-2'>
							{user.username.substring(0, 2).toLocaleUpperCase()}
						</AvatarFallback>
					</Avatar>
					<span
						onClick={RedirectToCreateThread}
						className='bg-transparent border-none outline-none w-full hover:cursor-pointer'
					>
						Start a thread...
					</span>
				</div>
				<div className='flex justify-end'>
					<Button>Post</Button>
				</div>
			</div>
		</div>
	);
}
