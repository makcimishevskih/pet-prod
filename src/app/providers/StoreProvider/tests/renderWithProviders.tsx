import { ReactNode } from 'react';

import StoreProvider from '../ui/StoreProvider';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { render, RenderResult } from '@testing-library/react';

const renderWithProviders = (children: ReactNode): RenderResult => {
	return render(
		<StoreProvider>
			<MemoryRouter>
				<ThemeProvider>{children}</ThemeProvider>
			</MemoryRouter>
		</StoreProvider>
	);
};

export default renderWithProviders;
