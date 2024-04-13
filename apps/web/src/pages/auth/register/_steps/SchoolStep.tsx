import { rem } from '@oechul/styles';
import { Button, Input, Select } from '@oechul/ui';
import { FormEvent, useState, useMemo } from 'react';

import Tip from '@/components/Tip';
import { RegisterContent } from '@/pages/auth/auth.styles.ts';
import { RegisterStepProps } from '@/pages/auth/register';

const schoolOptions = [
  { label: '한국외국어대학교 글로벌캠퍼스', value: 'hufs-global' },
];

const majorOptions = [
  { label: '글로벌비즈니스학과', value: 'global-business' },
  { label: '글로벌커뮤니케이션학과', value: 'global-communication' },
  { label: '글로벌경제학과', value: 'global-economics' },
  { label: '글로벌한국학과', value: 'global-korean-studies' },
  { label: '글로벌문화콘텐츠학과', value: 'global-culture-contents' },
  { label: '글로벌미디어학과', value: 'global-media' },
  { label: '글로벌스포츠산업학과', value: 'global-sports-industry' },
  { label: '글로벌인재학부', value: 'global-human-resources' },
  { label: '글로벌리더십학부', value: 'global-leadership' },
  { label: '글로벌한국학부', value: 'global-korean-studies' },
];

const SchoolStep = ({ formData, proceedToNextStep }: RegisterStepProps) => {
  const [school, setSchool] = useState<string>(formData.school);
  const [major, setMajor] = useState<string>(formData.major);
  const [studentId, setStudentId] = useState<string>(formData.studentId);

  const isSchoolStepValid = useMemo(() => {
    return school !== '' && major !== '' && studentId.length >= 7;
  }, [school, major, studentId]);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isSchoolStepValid) proceedToNextStep({ school, major, studentId });
  };

  return (
    <RegisterContent as="form" onSubmit={handleFormSubmit}>
      <div>
        <Tip margin={`0 0 ${rem(28)} 0`}>
          한번 입력한 학교와 학과, 학번은 수정이 불가해요.
        </Tip>
        <Select
          label="학교 선택"
          options={schoolOptions}
          value={school}
          onChange={e => {
            setSchool(e.target.value);
            setMajor('');
          }}
        />
        <Select
          style={{ marginTop: rem(16) }}
          label="학과 선택"
          options={majorOptions}
          value={major}
          onChange={e => setMajor(e.target.value)}
        />
        <Input
          style={{ marginTop: rem(16) }}
          label="학번 입력 ex)202400000"
          type="text"
          value={studentId}
          maxLength={9}
          onChange={e => setStudentId(e.target.value)}
          aria-invalid={studentId.length < 7}
        />
      </div>
      <Button type="submit" aria-invalid={!isSchoolStepValid}>
        다음
      </Button>
    </RegisterContent>
  );
};

export default SchoolStep;
