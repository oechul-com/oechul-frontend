import { IDCard, UploadIcon } from '@oechul/icons';
import { theme } from '@oechul/styles';
import { Button, Text } from '@oechul/ui';
import { ChangeEvent, ReactElement, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { userState } from '@/atoms/authState.ts';
import Layout from '@/components/layouts/Layout';
import useMemberVerificationMutation from '@/hooks/mutations/useMemberVerificationMutation.ts';

import CloseDialog from './_components/CloseDialog.tsx';
import ConfirmDialog from './_components/ConfirmDialog.tsx';
import * as styles from './verification.styles.ts';

const VerificationPage = (): ReactElement => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const [isCloseDialogOpen, setCloseDialogOpen] = useState<boolean>(false);
  const [isConfirmDialogOpen, setConfirmDialogOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setSelectedImage(file);
      setConfirmDialogOpen(true);
    }
  };

  const user = useRecoilValue(userState);
  const { mutate: verificationMutate } = useMemberVerificationMutation();

  const handleVerificationSubmit = (image: File) => {
    if (!image || !user) return;

    verificationMutate(
      { memberId: user.id.toString(), image },
      {
        onSuccess: () => alert('성공적으로 인증되었습니다.'),
        onError: () => alert('인증에 실패했습니다.'),
      },
    );
  };

  return (
    <>
      <Layout
        title="재학생 인증하기"
        close={true}
        closeAction={() => setCloseDialogOpen(true)}
      >
        <styles.VerificationContent>
          <styles.VerificationGuideContainer>
            <Text
              fontSize={theme.fontSizes.xl}
              fontWeight={theme.fontWeights.semibold}
            >
              ✅ 확인해 주세요
            </Text>
            <IDCard width="100%" height="100%" />
            <Text
              textColor={theme.colors.gray500}
              fontSize={theme.fontSizes.xs}
              lineHeight="180%"
            >
              &middot; 본인의 이름/학번/학과명을 식별할 수 있는 재학 증명서 또는
              실물 학생증(모바일 학생증)을 업로드해 주세요.
              <br />
              &middot; 얼굴은 가려도 무방합니다.
              <br />
              &middot; 업로드된 개인정보는 인증 절차를 마친 후 즉시 파기됩니다.
            </Text>
          </styles.VerificationGuideContainer>
          <styles.VerificationButtonContainer>
            <input
              ref={inputFileRef}
              type="file"
              onChange={handleImageChange}
              accept="image/jpeg, image/png"
              style={{ display: 'none' }}
            />
            <Button
              variant="blue"
              width="100%"
              onClick={() => inputFileRef.current?.click()}
            >
              <UploadIcon fill="#0085FF" /> 이미지 파일 업로드
            </Button>
            <Text
              textColor={theme.colors.gray400}
              fontSize={theme.fontSizes['2xs']}
            >
              실물 학생증(모바일) 스크린캡쳐 또는 이미지
            </Text>
          </styles.VerificationButtonContainer>
        </styles.VerificationContent>
      </Layout>

      <CloseDialog
        isOpen={isCloseDialogOpen}
        onToggle={() => setCloseDialogOpen(false)}
      />

      <ConfirmDialog
        isOpen={isConfirmDialogOpen}
        onToggle={() => setConfirmDialogOpen(false)}
        onConfirm={handleVerificationSubmit}
        image={selectedImage}
      />
    </>
  );
};

export default VerificationPage;
