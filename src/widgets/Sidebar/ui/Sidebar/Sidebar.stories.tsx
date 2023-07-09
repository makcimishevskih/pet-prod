import css from './Sidebar.module.scss';
import type {
	ComponentMeta,
	ComponentStory,
	DecoratorFn,
	Meta,
	StoryObj
} from '@storybook/react';

import { ThemeEnum, ThemeProvider } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

export default {
	component: Sidebar,
	title: 'widget/Sidebar',
	tags: ['autodocs']
};

const Template: ComponentStory<typeof Sidebar> = (args) => (
	<Sidebar {...args} />
);

export const Collapsed = Template.bind({});
export const Dark = Template.bind({});
export const Light = Template.bind({});

Collapsed.args = {
	className: css.collapsed
};

const ThemeDecorator = (theme: ThemeEnum) => (Story: any) => {
	return (
		<ThemeProvider initialTheme={theme}>
			<div className={`app ${theme}`}>
				<Story />
			</div>
		</ThemeProvider>
	);
};

Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
Light.decorators = [ThemeDecorator(ThemeEnum.LIGHT)];
