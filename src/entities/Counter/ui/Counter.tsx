import { t } from 'i18next';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface ICounterProps {}

const Counter: FC<ICounterProps> = (props) => {
	const dispatch = useDispatch();
	const value = useSelector(getCounterValue);
	const { t } = useTranslation();

	const increment = () => {
		dispatch(counterActions.increment());
	};
	const decrement = () => {
		dispatch(counterActions.decrement());
	};

	return (
		<div>
			<h1>{t('Счетчик')}</h1>
			<h2 data-testid='counterValue'>{value}</h2>
			<button
				data-testid='incrementBtn'
				onClick={increment}
			>
				{t('Увеличить')}
			</button>
			<button
				data-testid='decrementBtn'
				onClick={decrement}
			>
				{t('Уменьшить')}
			</button>
		</div>
	);
};

export default Counter;
