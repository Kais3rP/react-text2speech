import React from 'react';
import { IStoreContext, IMainPropsContext, IReaderContext } from './types';

export const StoreContext = React.createContext<IStoreContext | null>(null);

export const MainPropsContext = React.createContext<IMainPropsContext | null>(
	null
);

export const ReaderContext = React.createContext<IReaderContext | null>(null);
