'use client';
import React from 'react';
import { Button } from './ui/button';
import { useSession, signOut } from 'next-auth/react';

export default function SignOutButton() {
	const { data: session } = useSession();

	const handleSignOut = async (e: React.MouseEvent) => {
		e.preventDefault();
		await signOut();
	};
	return (
		<Button
			disabled={session && session.user ? false : true}
			onClick={handleSignOut}
		>
			Log Out
		</Button>
	);
}
