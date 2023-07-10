import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider/config/stateScheme';

import { getCounter } from './getCounter';

describe('getCounterValue', () => {
	test('state is equal', () => {
		const state: DeepPartial<IStateSchema> = {
			counter: { value: 10 }
		};

		expect(getCounter(state as IStateSchema)).toEqual({ value: 10 });
	});
});
