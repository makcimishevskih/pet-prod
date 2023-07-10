import { DeepPartial } from '@reduxjs/toolkit';
import { screen } from '@testing-library/react';
import { IStateSchema } from 'app/providers/StoreProvider/config/stateScheme';
import renderWithProviders from 'app/providers/StoreProvider/tests/renderWithProviders';

import { Counter } from 'entities/Counter';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
	test('state value is equal', () => {
		renderWithProviders(<Counter />);
		const state: DeepPartial<IStateSchema> = {
			counter: { value: 10 }
		};

		expect(getCounterValue(state as IStateSchema)).toEqual(10);
	});
});
