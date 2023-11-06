import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
	const [DarkMode, setDarkMode] = useState(false);
	const toggleDarkMode = () => setDarkMode((prev) => !prev);
	return (
		<DarkModeContext.Provider value={{ DarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

//캡슐화 → 다른 컴포넌트에서 사용하는 기술을 모르도록 한다.
export const useDarkMode = () => useContext(DarkModeContext);
