import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeEnum, useTheme } from 'app/providers/ThemeProvider';

import { Button, ButtonThemeE } from 'shared/ui/Button/Button';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			theme={ButtonThemeE.CLEAR}
			className={classNames('', {}, [className])}
			onClick={toggleTheme}
		>
			{theme === ThemeEnum.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
};
