'use client';

import React, { createContext, useState } from 'react';

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
	const [theme, setTheme] = useState<string>('dark');
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
