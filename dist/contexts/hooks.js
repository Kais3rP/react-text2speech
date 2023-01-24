import { useContext } from 'react';
import { StoreContext, ReaderContext, MainPropsContext } from './contexts';
export const useStore = () => {
    const store = useContext(StoreContext);
    return store;
};
export const useReader = () => {
    const reader = useContext(ReaderContext);
    return reader;
};
export const useMainProps = () => {
    const mainProps = useContext(MainPropsContext);
    return mainProps;
};
//# sourceMappingURL=hooks.js.map