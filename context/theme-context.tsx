'use client';

import React, { createContext, useState, useEffect } from 'react';

interface ThemeContextProps {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: '',
	setTheme: () => {},
});

export const ThemeContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [theme, setTheme] = useState<string>('');

	useEffect(() => {
		// This code will only run on the client side
		const existingTheme = localStorage.getItem('theme');
		if (existingTheme) {
			setTheme(existingTheme);
		}
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
