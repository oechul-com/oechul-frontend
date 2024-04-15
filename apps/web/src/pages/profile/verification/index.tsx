import { IDCard, UploadIcon } from '@oechul/icons';
import { theme } from '@oechul/styles';
import { Button, Text } from '@oechul/ui';
import { ChangeEvent, ReactElement, useRef, useState } from 'react';

import Layout from '@/components/layout/Layout';

import CloseDialog from './_components/CloseDialog.tsx';
import ConfirmDialog from './_components/ConfirmDialog.tsx';
import {
  VerificationButtonContainer,
  VerificationContent,
  VerificationGuideContainer,
} from './verification.styles.ts';

const VerificationPage = (): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isCloseDialogOpen, setIsCloseDialogOpen] = useState<boolean>(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] =
    useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null);

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file) {
      setImage(file);
      setIsConfirmDialogOpen(true);
    }
  };

  return (
    <>
      <Layout
        title="재학생 인증하기"
        close={true}
        closeAction={() => setIsCloseDialogOpen(true)}
      >
        <VerificationContent>
          <VerificationGuideContainer>
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
              lineHeight="140%"
            >
              &middot; 본인의 이름/학번/학과명을 식별할 수 있는 재학 증명서 또는
              실물 학생증(모바일 학생증)을 업로드해 주세요.
              <br />
              &middot; 얼굴은 가려도 무방합니다.
              <br />
              &middot; 업로드된 개인정보는 인증 절차를 마친 후 즉시 파기됩니다.
            </Text>
          </VerificationGuideContainer>
          <VerificationButtonContainer>
            <input
              ref={inputRef}
              type="file"
              onChange={handleUpload}
              accept="image/jpeg, image/png"
              style={{ display: 'none' }}
            />
            <Button
              variant="blue"
              width="100%"
              onClick={() => inputRef.current?.click()}
            >
              <UploadIcon fill="#0085FF" /> 이미지 파일 업로드
            </Button>
            <Text
              textColor={theme.colors.gray400}
              fontSize={theme.fontSizes['2xs']}
            >
              실물 학생증(모바일) 스크린캡쳐 또는 이미지
            </Text>
          </VerificationButtonContainer>
        </VerificationContent>
      </Layout>

      <CloseDialog
        isOpen={isCloseDialogOpen}
        onToggle={() => setIsCloseDialogOpen(false)}
      />

      <ConfirmDialog
        isOpen={isConfirmDialogOpen}
        onToggle={() => setIsConfirmDialogOpen(false)}
        onConfirm={() => alert('confirm')}
        image={image}
      />
    </>
  );
};

export default VerificationPage;
