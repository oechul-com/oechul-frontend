import { rem, theme } from '@oechul/styles';
import { Text } from '@oechul/ui';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import Layout from '@/components/layouts/Layout';

type MessageType = {
  content: string;
  createdAt: Date;
  isRead: boolean;
};

const MESSAGES: MessageType[] = [
  {
    content: '이곳에 알림 메세지 예를 들어서 정상길님이 예비군팀에 들어왔어요!',
    createdAt: new Date(),
    isRead: true,
  },
  {
    content:
      '(📢공지) 외출에서 가장 많은 매칭 거절을 당한 팀에게치킨 기프티콘을 드립니다. 많은 참여 부탁드립니다.',
    createdAt: new Date(),
    isRead: true,
  },
  {
    content: '이곳에 알림 메세지 예를 들어서 정상길님이 예비군팀에 들어왔어요!',
    createdAt: new Date(),
    isRead: false,
  },
];

const AlertPage = () => {
  const [messages, setMessages] = useState<MessageType[]>(MESSAGES);

  const formatDate = (createdAt: Date) => {
    const now = new Date();
    const createdAtDate = new Date(createdAt);

    const timeDiff = now.getTime() - createdAtDate.getTime();

    // 같은 날짜인지 확인 (오늘)
    if (createdAtDate.toDateString() === now.toDateString()) {
      return `${createdAtDate.getHours()}:${createdAtDate.getMinutes().toString().padStart(2, '0')}`;
    }

    // 어제인지 확인
    if (timeDiff <= 24 * 60 * 60 * 1000) {
      return '어제';
    }

    // 일주일 이내인지 확인
    if (timeDiff <= 7 * 24 * 60 * 60 * 1000) {
      const daysAgo = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
      return `${daysAgo}일 전`;
    }

    // 그 외의 경우, 년/월/일 형식으로 반환
    return `${createdAtDate.getFullYear()}년 ${createdAtDate.getMonth() + 1}월 ${createdAtDate.getDate()}일`;
  };

  useEffect(() => {
    setMessages(MESSAGES);
  }, []);

  return (
    <Layout arrow borderline title={'알림'}>
      <AlertMessagesBox>
        {messages
          .reverse()
          .map(({ content, createdAt, isRead }: MessageType, index) => {
            return (
              <AlertMessageBox>
                <Text lineHeight={'140%'}>{content}</Text>
                <AlertMessageDateBox>
                  {!isRead && <CircleIsRead />}
                  <Text
                    fontSize={theme.fontSizes['2xs']}
                    fontWeight={theme.fontWeights.normal}
                    textColor={theme.colors.gray500}
                  >
                    {formatDate(createdAt)}
                  </Text>
                </AlertMessageDateBox>
                {index !== messages.length - 1 && <Line />}
              </AlertMessageBox>
            );
          })}
      </AlertMessagesBox>
    </Layout>
  );
};

export default AlertPage;

const AlertMessagesBox = styled.div`
  ${props => props.theme.layout.columnCenter};
  padding-top: ${rem(28)};
`;
const AlertMessageBox = styled.div`
  width: 100%;
`;

const AlertMessageDateBox = styled.div`
  ${props => props.theme.layout.centerY};
  margin-top: ${rem(10)};
  gap: ${rem(6)};
`;

const CircleIsRead = styled.div`
  width: ${rem(5)};
  height: ${rem(5)};

  background-color: ${theme.colors.red.accent};
  border-radius: 50%;
`;

const Line = styled.div`
  width: 100%;
  height: ${rem(1)};
  background-color: ${theme.colors.gray250};
  margin: ${rem(16)} 0;
`;
