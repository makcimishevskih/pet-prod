import { DeepPartial } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/CounterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
	test('decrement', () => {
		const counter: DeepPartial<CounterSchema> = {
			value: 10
		};

		expect(
			counterReducer(counter as CounterSchema, counterActions.decrement())
		).toEqual({ value: 9 });
	});
	test('increment', () => {
		const counter: DeepPartial<CounterSchema> = {
			value: 10
		};

		expect(
			counterReducer(counter as CounterSchema, counterActions.increment())
		).toEqual({ value: 11 });
	});
	test('empty state slice with initial state { value = 0 }', () => {
		expect(counterReducer(undefined, counterActions.increment())).toEqual({
			value: 1
		});
	});
});
