import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false);
	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		updateDarkMode(!darkMode);
	};

	useEffect(() => {
		const isDark =
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches);
		setDarkMode(isDark);
		updateDarkMode(isDark);
	}, []);

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

function updateDarkMode(darkMode) {
	if (darkMode) {
		document.documentElement.classList.add('dark');
		localStorage.theme = 'dark';
	} else {
		document.documentElement.classList.remove('dark');
		localStorage.theme = 'light';
	}
}

//캡슐화 → 다른 컴포넌트에서 사용하는 기술을 모르도록 한다.
export const useDarkMode = () => useContext(DarkModeContext);
