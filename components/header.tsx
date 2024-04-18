'use client';
import { useSession } from 'next-auth/react';
import SignOutButton from './signout-button';

export default function Header() {
	const { data: session } = useSession();
	return (
		<header className='flex flex-row justify-between items-center px-8 py-4'>
			<div>{session?.user?.email || 'null'}</div>
			<SignOutButton />
		</header>
	);
}
