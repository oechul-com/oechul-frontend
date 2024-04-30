import { rem, theme } from '@oechul/styles';
import { Accordion, Input, Text } from '@oechul/ui';
import { useNavigate } from 'react-router-dom';

import {
  AccordionContent,
  AccordionHeader,
  AccordionToggleContainer,
  CompleteContent,
  CreateCompleteContent,
  InviteCodeCopyButton,
  InviteCodeInputContainer,
  SaveButton,
  SaveButtonContainer,
} from '@/pages/meetup/create/create.styles.ts';
import { copyTextToClipboard } from '@/utils/clipboard.tsx';

const CompleteStep = () => {
  const navigate = useNavigate();

  return (
    <>
      <CreateCompleteContent>
        <Text fontSize={rem(96)}>🎊</Text>
        <Text
          style={{ marginTop: rem(28) }}
          fontSize={theme.fontSizes['2xl']}
          fontWeight={theme.fontWeights.semibold}
        >
          회원가입 완료!
        </Text>

        <CompleteContent>
          <InviteCodeInputContainer>
            <Input
              label="초대 코드"
              value="13D2-4WE2-4KD2-1E2D"
              readOnly={true}
            />
            <InviteCodeCopyButton
              onClick={() =>
                copyTextToClipboard('13D2-4WE2-4KD2-1E22D')
                  ? alert('복사되었습니다.')
                  : alert('복사에 실패했습니다. 다시 시도해주세요.')
              }
            >
              복사
            </InviteCodeCopyButton>
          </InviteCodeInputContainer>

          <Accordion>
            <Accordion.Content>
              <AccordionHeader>
                <span>💁🏻‍♀</span>
                <span>초대 코드 사용법</span>
                <Accordion.Toggle as={AccordionToggleContainer} />
              </AccordionHeader>
              <Accordion.Collapse divider={true}>
                <AccordionContent>
                  <li>팀 코드를 저장하거나 캡쳐해서 팀원들에게 보내주세요!</li>
                  <li>
                    초기에 설정된 팀 인원은 수정이 불가능해요. 추가하고 싶은
                    인원이 있으면 새롭게 팀을 만들어보세요!
                  </li>
                </AccordionContent>
              </Accordion.Collapse>
            </Accordion.Content>
          </Accordion>

          <Accordion>
            <Accordion.Content>
              <AccordionHeader>
                <span>💘</span>
                <span>매칭은 어떤 방식으로 이루어지나요?</span>
                <Accordion.Toggle as={AccordionToggleContainer} />
              </AccordionHeader>
              <Accordion.Collapse divider={true}>
                <AccordionContent>
                  <li>
                    매칭리스트 → 원하는 팀 선택 → 매칭 신청 → 상대방이 매칭 수락
                    시 매칭 성공
                  </li>
                  <li>상대방의 매칭 요청 → 매칭 수락 시 매칭 성공</li>
                </AccordionContent>
              </Accordion.Collapse>
            </Accordion.Content>
          </Accordion>

          <Accordion>
            <Accordion.Content>
              <AccordionHeader>
                <span>💘</span>
                <span>매칭이 성공하면 어떻게 되나요?</span>
                <Accordion.Toggle as={AccordionToggleContainer} />
              </AccordionHeader>
              <Accordion.Collapse divider={true}>
                <AccordionContent>
                  매칭 성공 시 각 팀에게 해당 페이지가 전송됩니다. 대표 연락처를
                  통해 매칭 날짜와 장소를 정해주세요! 매칭 성공 시 팀 삭제 및
                  매칭 취소가 불가능해요.
                </AccordionContent>
              </Accordion.Collapse>
            </Accordion.Content>
          </Accordion>
        </CompleteContent>
      </CreateCompleteContent>
      <SaveButtonContainer>
        <SaveButton
          variant="accent"
          width="100%"
          onClick={() => navigate('/', { replace: true })}
        >
          매칭하러 가기
        </SaveButton>
      </SaveButtonContainer>
    </>
  );
};

export default CompleteStep;
