import { createContext } from 'react';

import { Step } from '@/components/Funnel/Funnel.types.ts';

interface FunnelContextType {
  currentStep: Step;
  goToStep: (step: Step) => void;
}

const FunnelContext = createContext<FunnelContextType | undefined>(undefined);

export default FunnelContext;
