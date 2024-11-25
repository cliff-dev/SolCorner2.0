'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useStore } from '../store/store'; 

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  const store = useStore();
  return <Provider store={store}>{children}</Provider>;
};
