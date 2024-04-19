'use client';
import { ThemeContext } from '@/context/theme-context';
import { useContext } from 'react';

function BottomBar() {
	const { theme } = useContext(ThemeContext);
	return (
		<footer className={`${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'}`}>
			<nav className='py-4'></nav>
		</footer>
	);
}

export default BottomBar;
