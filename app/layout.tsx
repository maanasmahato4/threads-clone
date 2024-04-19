import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import AuthSessionProvider from '@/components/auth-session-provider';
import { ThemeContextProvider } from '@/context/theme-context';
import ThemeProvider from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

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
		<ThemeContextProvider>
			<ThemeProvider>
				<AuthSessionProvider>
					<body className={inter.className}>{children}</body>
				</AuthSessionProvider>
			</ThemeProvider>
		</ThemeContextProvider>
	);
}
