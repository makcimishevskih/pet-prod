import { FC, useMemo, useState } from 'react';
import {
	LOCAL_STORAGE_THEME_KEY,
	ThemeEnum,
	ThemeContext
} from '../lib/ThemeContext';

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum) ||
	ThemeEnum.LIGHT;

interface ThemeProviderProps {
	initialTheme?: ThemeEnum;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
	const { initialTheme, children } = props;

	const [theme, setTheme] = useState<ThemeEnum>(initialTheme || defaultTheme);

	const defaultProps = useMemo(
		() => ({
			theme,
			setTheme
		}),
		[theme]
	);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
