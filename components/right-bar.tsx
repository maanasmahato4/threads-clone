'use client';

import { ThemeContext } from '@/context/theme-context';
import { useContext } from 'react';

interface RightBarProps {
	className?: string;
}

const RightBar: React.FC<RightBarProps> = ({ className }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<div
			className={`${className} ${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'}`}
		>
			right bar
		</div>
	);
};

export default RightBar;
