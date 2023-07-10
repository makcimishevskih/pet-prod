import css from './Sidebar.module.scss';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSizeE, ButtonThemeE } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const { t } = useTranslation();

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div
			data-testid='sidebar'
			className={classNames(css.Sidebar, { [css.collapsed]: collapsed }, [
				className
			])}
		>
			<Button
				data-testid='sidebar-toggle'
				onClick={onToggle}
				className={css.collapseBtn}
				theme={ButtonThemeE.BACKGROUND_INVERTED}
				size={ButtonSizeE.LARGE}
				square
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={css.items}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.main}
					className={css.item}
				>
					<MainIcon className={css.icon} />
					<span className={css.link}>{t('Главная')}</span>
				</AppLink>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.about}
					className={css.item}
				>
					<AboutIcon className={css.icon} />
					<span className={css.link}>{t('О сайте')}</span>
				</AppLink>
			</div>
			<div className={css.switchers}>
				<ThemeSwitcher />
				<LangSwitcher
					short={collapsed}
					className={css.lang}
				/>
			</div>
		</div>
	);
};
