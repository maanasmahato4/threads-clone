'use client';

import { ThemeContext } from '@/context/theme-context';
import { useContext } from 'react';

interface LeftBarProps {
	className?: string;
}

const LeftBar: React.FC<LeftBarProps> = ({ className }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<div
			className={`${className} ${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'}`}
		>
			left bar
		</div>
	);
};

export default LeftBar;
