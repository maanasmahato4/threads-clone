import LeftBar from '@/components/left-bar';
import RightBar from '@/components/right-bar';
import Header from '@/components/top-bar';
import type { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Threads',
	description: 'A social media application for users all around the world',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='h-screen flex flex-col'>
			<Header />
			<div className='flex-grow grid grid-rows-1 grid-cols-12 gap-x-5'>
				<LeftBar className='col-span-2 shadow-sm' />
				<section className='col-span-7'>{children}</section>
				<RightBar className='col-span-3 shadow-sm' />
			</div>
		</div>
	);
}
