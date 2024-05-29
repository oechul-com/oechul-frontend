import { createContext } from 'react';

export type Step = string;

interface FunnelContextType {
  currentStep: Step;
  goToStep: (step: Step) => void;
}

const FunnelContext = createContext<FunnelContextType | undefined>(undefined);

export default FunnelContext;
