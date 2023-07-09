import { FC, ReactNode } from 'react';

import StoreProvider from '../ui/StoreProvider';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { render, RenderResult } from '@testing-library/react';

const renderWithProviders = (children: ReactNode): RenderResult => {
	return render(
		<MemoryRouter>
			<StoreProvider>
				<ThemeProvider>{children}</ThemeProvider>
			</StoreProvider>
		</MemoryRouter>
	);
};

export default renderWithProviders;
