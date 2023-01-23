import { useContext } from 'react';
import { StoreContext, ReaderContext, MainPropsContext } from './contexts';
import { IStoreContext, IReaderContext, IMainPropsContext } from './types';

export const useStore = (): IStoreContext => {
	const store = useContext(StoreContext);
	return store as IStoreContext;
};

export const useReader = (): IReaderContext => {
	const reader = useContext(ReaderContext);
	return reader as IReaderContext;
};

export const useMainProps = (): IMainPropsContext => {
	const mainProps = useContext(MainPropsContext);
	return mainProps as IMainPropsContext;
};
