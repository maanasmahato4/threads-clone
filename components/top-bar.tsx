'use client';
import SignOutButton from './signout-button';

export default function Header() {
	return (
		<header className='shadow-md'>
			<nav className='flex flex-row justify-between items-center px-8 py-4'>
				<div></div>
				<SignOutButton />
			</nav>
		</header>
	);
}
