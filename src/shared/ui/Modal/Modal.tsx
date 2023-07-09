import css from './Modal.module.scss';

import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

import { Portal } from 'shared/ui/Portal/Portal';

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
	const { className, children, isOpen, onClose } = props;

	const [isClosing, setIsClosing] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();
	const { theme } = useTheme();

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	// Новые ссылки!!!
	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeHandler();
			}
		},
		[closeHandler]
	);

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	const mods: Record<string, boolean> = {
		[css.opened]: isOpen,
		[css.isClosing]: isClosing,
		[css[theme]]: true
	};

	return (
		<Portal>
			<div className={classNames(css.Modal, mods, [className])}>
				<div
					className={css.overlay}
					onClick={closeHandler}
				>
					<div
						className={css.content}
						onClick={onContentClick}
					>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
