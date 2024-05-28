import { AnimatePresence, motion } from 'framer-motion';
import { memo, ReactNode, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';

import FunnelContext, { Step } from './Funnel.contexts.tsx';

const useFunnel = (
  steps: readonly Step[],
  options?: {
    stepQueryKey?: string;
    initialStep?: Step;
    onStepChange?: (step: Step) => void;
  },
) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const stepQueryKey = options?.stepQueryKey ?? 'funnel-step';
  const initialStep = options?.initialStep ?? steps[0];
  const currentStep = (searchParams.get(stepQueryKey) as Step) ?? initialStep;

  const goToStep = (step: Step) => {
    setSearchParams({ [stepQueryKey]: step });
    if (options?.onStepChange) {
      options.onStepChange(step);
    }
  };

  return {
    currentStep,
    goToStep,
    Funnel: ({ children }: { children: ReactNode }) => (
      <FunnelContext.Provider value={{ currentStep, goToStep }}>
        <AnimatePresence>{children}</AnimatePresence>
      </FunnelContext.Provider>
    ),
    Step: memo(({ name, children }: { name: Step; children: ReactNode }) => {
      const context = useContext(FunnelContext);
      if (context?.currentStep !== name) return null;
      return (
        <motion.section
          style={{ width: '100%', height: '100%' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.section>
      );
    }),
  };
};

export default useFunnel;
