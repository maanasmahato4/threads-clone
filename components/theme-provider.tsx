'use client';

import { ThemeContext } from '@/context/theme-context';
import React, { useContext } from 'react';

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const { theme } = useContext(ThemeContext);
	console.log(theme);
	return (
		<html lang='en' className={theme}>
			{children}
		</html>
	);
}
