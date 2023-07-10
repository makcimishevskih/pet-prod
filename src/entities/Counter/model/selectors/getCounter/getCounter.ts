import { IStateSchema } from 'app/providers/StoreProvider/config/stateScheme';
import { useSelector } from 'react-redux';

export const getCounter = (state: IStateSchema) => state.counter;
