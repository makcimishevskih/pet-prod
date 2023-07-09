import css from './Button.module.scss';

import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

export enum ButtonThemeEnum {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonThemeEnum;
	square?: boolean;
	size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme,
		square,
		size = ButtonSize.M,
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
