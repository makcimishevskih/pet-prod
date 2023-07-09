import css from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonThemeEnum } from 'shared/ui/Button/Button';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);

	return (
		<div className={classNames(css.Navbar, {}, [className])}>
			<Button
				theme={ButtonThemeEnum.CLEAR_INVERTED}
				className={css.links}
				onClick={onToggleModal}
			>
				{t('Войти')}
			</Button>
			<Modal
				isOpen={isAuthModal}
				onClose={onToggleModal}
			>
				{t(
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.'
				)}
			</Modal>
		</div>
	);
};
