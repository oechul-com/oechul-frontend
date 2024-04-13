import { memo, ReactNode, useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import FunnelContext from '@/components/Funnel/Funnel.contexts.tsx';
import { Step } from '@/components/Funnel/Funnel.types.ts';

const useFunnel = (
  steps: ReadonlyArray<Step>,
  options?: {
    stepQueryKey?: string;
    initialStep?: Step;
    onStepChange?: (step: Step) => void;
  },
) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const stepQueryKey = options?.stepQueryKey ?? 'funnel-step';
  const initialStep = options?.initialStep ?? steps[0];
  const currentStep = searchParams.get(stepQueryKey) ?? initialStep;

  useEffect(() => {
    const step = searchParams.get(stepQueryKey) || initialStep;
    if (step && steps.includes(step)) {
      options?.onStepChange?.(step);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    searchParams,
    steps,
    stepQueryKey,
    initialStep,
    options?.onStepChange,
    setSearchParams,
  ]);

  const goToStep = (step: Step) => {
    setSearchParams({ [stepQueryKey]: step });
  };

  return {
    currentStep,
    goToStep,
    Funnel: ({ children }: { children: ReactNode }) => (
      <FunnelContext.Provider value={{ currentStep, goToStep }}>
        {children}
      </FunnelContext.Provider>
    ),
    Step: memo(({ name, children }: { name: Step; children: ReactNode }) => {
      const context = useContext(FunnelContext);
      if (context?.currentStep !== name) return null;
      return <>{children}</>;
    }),
  };
};

export default useFunnel;
