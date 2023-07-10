import css from './Button.module.scss';

import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

export enum ButtonThemeE {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSizeE {
	MEDIUM = 'size_m',
	LARGE = 'size_l',
	XLARGE = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonThemeE;
	square?: boolean;
	size?: ButtonSizeE;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme,
		square,
		size = ButtonSizeE.MEDIUM,
		...otherProps
	} = props;

	const mods: Record<string, boolean> = {
		[css[theme]]: true,
		[css.square]: square,
		[css[size]]: true
	};

	return (
		<button
			type='button'
			className={classNames(css.Button, mods, [className])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
