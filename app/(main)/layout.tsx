import Header from '@/components/header';
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
		<div>
			<Header />
			<div>{children}</div>
		</div>
	);
}
