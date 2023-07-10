import { DeepPartial } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { IStateSchema } from '../config/stateScheme';
import { createReduxStore } from '../config/store';

interface IStoreProviderProps {
	children: ReactNode;
	initialState?: DeepPartial<IStateSchema>;
}

const StoreProvider: FC<IStoreProviderProps> = ({ children, initialState }) => {
	const store = createReduxStore(initialState as IStateSchema);
	return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
