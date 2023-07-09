import App from './App';
import renderWithProviders from './providers/StoreProvider/tests/renderWithProviders';

describe('App', () => {
	test('test1', () => {
		renderWithProviders(<App />);
	});
});
