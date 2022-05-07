import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';

import router from 'next/router';

import { LoaderRouterNext } from 'components/LoaderRouterNext';

interface LoaderContextData {
  customLoaderState: boolean;
  setCustomLoaderState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoaderContext = createContext({} as LoaderContextData);

interface LoaderProviderProps {
  children: ReactNode;
}
export const LoaderProvider = ({ children }: LoaderProviderProps) => {
  const [customLoaderState, setCustomLoaderState] = useState(false);

  const handleStart = () => {
    setCustomLoaderState(true);
  };

  const handleStop = () => {
    setCustomLoaderState(false);
  };

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router.events]);

  return (
    <LoaderContext.Provider value={{ customLoaderState, setCustomLoaderState }}>
      <LoaderRouterNext isOpen={customLoaderState} />
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
