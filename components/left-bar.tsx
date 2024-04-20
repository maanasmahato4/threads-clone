'use client';

import { ThemeContext } from '@/context/theme-context';
import { useContext } from 'react';
import { leftBarLinks } from '@/lib/contants';
import Link from 'next/link';
import Image from 'next/image';

interface LeftBarProps {
	className?: string;
}

const LeftBar: React.FC<LeftBarProps> = ({ className }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<div
			className={`${className} ${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'}`}
		>
			{leftBarLinks.map((link, idx) => {
				return (
					<Link
						key={idx}
						href={link.route}
						className='flex gap-x-2 py-4 flex-row pl-4 m-2 items-center hover:bg-purple-600 rounded-md active:bg-purple-600 focus:bg-purple-600'
					>
						<Image height={24} width={24} src={link.imgURL} alt='' />{' '}
						{link.label}
					</Link>
				);
			})}
		</div>
	);
};

export default LeftBar;
