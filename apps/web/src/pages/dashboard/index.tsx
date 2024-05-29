import { rem, theme } from '@oechul/styles';
import { Text } from '@oechul/ui';
import { ReactElement } from 'react';

import useFunnel from '@/components/Funnel/Funnel.hooks.tsx';
import Layout from '@/components/layouts/Layout';

import MeetupTab from './_tabs/MeetupTab/MeetupTab.tsx';
import { PARTICIPATE_MATCHING_LIST } from './constants.ts';
import * as styles from './dashboard.styles.ts';

const tabs: string[] = ['initial', 'meetup'];

const DashboardPage = (): ReactElement => {
  const {
    currentStep: current,
    Funnel: Tab,
    Step: TabStep,
    goToStep: goToTab,
  } = useFunnel(tabs, {
    stepQueryKey: 'tab',
  });

  const tabComponents: { [key: string]: ReactElement } = {
    initial: <></>,
    meetup: <MeetupTab />,
  };

  return (
    <Layout dashboardHeader={true}>
      <Text
        fontSize={theme.fontSizes.xl}
        fontWeight={theme.fontWeights.semibold}
        style={{ marginTop: `${rem(28)}` }}
      >
        매칭 참여하기
      </Text>

      <styles.ParticipateMatchingList>
        {PARTICIPATE_MATCHING_LIST.map(participate => (
          <styles.ParticipateMatchingItem
            key={participate.code}
            $selected={participate.code === current}
            $bgColor={participate.bgColor}
            onClick={() => goToTab(participate.code)}
          >
            <styles.ParticipateMatchingItemIcon>
              {participate.icon}
            </styles.ParticipateMatchingItemIcon>
            <styles.ParticipateMatchingTitle>
              {participate.title}
            </styles.ParticipateMatchingTitle>
          </styles.ParticipateMatchingItem>
        ))}
      </styles.ParticipateMatchingList>

      <Tab>
        {tabs.map(step => (
          <TabStep key={step} name={step}>
            {tabComponents[step]}
          </TabStep>
        ))}
      </Tab>
    </Layout>
  );
};

export default DashboardPage;
