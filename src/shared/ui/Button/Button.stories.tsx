import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { Button, ButtonSizeE, ButtonThemeE } from './Button';

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' }
	}
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Text'
};

export const Clear = Template.bind({});
Clear.args = {
	children: 'Text',
	theme: ButtonThemeE.CLEAR
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
	children: 'Text',
	theme: ButtonThemeE.CLEAR_INVERTED
};

export const Outline = Template.bind({});
Outline.args = {
	children: 'Text',
	theme: ButtonThemeE.OUTLINE
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
	children: 'Text',
	theme: ButtonThemeE.OUTLINE,
	size: ButtonSizeE.LARGE
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
	children: 'Text',
	theme: ButtonThemeE.OUTLINE,
	size: ButtonSizeE.XLARGE
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
	children: 'Text',
	theme: ButtonThemeE.OUTLINE
};
OutlineDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
	children: 'Text',
	theme: ButtonThemeE.BACKGROUND
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
	children: 'Text',
	theme: ButtonThemeE.BACKGROUND_INVERTED
};

export const Square = Template.bind({});
Square.args = {
	children: '>',
	theme: ButtonThemeE.BACKGROUND_INVERTED,
	square: true
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
	children: '>',
	theme: ButtonThemeE.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSizeE.LARGE
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
	children: '>',
	theme: ButtonThemeE.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSizeE.XLARGE
};
