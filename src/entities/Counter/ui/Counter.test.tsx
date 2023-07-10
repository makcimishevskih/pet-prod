import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

import { Counter } from 'entities/Counter';

describe('Counter', () => {
	test('render Counter with initialState', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 10 } }
		});

		const value = screen.getByTestId('counterValue');

		expect(value).toHaveTextContent('10');
	});

	test('render with increment', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 10 } }
		});

		const value = screen.getByTestId('counterValue');
		const increment = screen.getByTestId('incrementBtn');
		fireEvent.click(increment);

		expect(value).toHaveTextContent('11');
	});

	test('render with decrement', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 10 } }
		});

		const value = screen.getByTestId('counterValue');
		const decrement = screen.getByTestId('decrementBtn');

		fireEvent.click(decrement);

		expect(value).toHaveTextContent('9');
	});
});
