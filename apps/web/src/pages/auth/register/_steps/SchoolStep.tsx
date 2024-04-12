import { rem } from '@oechul/styles';
import { Button, Input, Select } from '@oechul/ui';
import { useState } from 'react';

import Tip from '@/components/Tip';
import { RegisterContent } from '@/pages/auth/auth.styles.ts';
import { RegisterStepProps } from '@/pages/auth/register';

const schoolOptions = [
  { label: '한국외국어대학교 글로벌캠퍼스', value: 'hufs-global' },
];

const SchoolStep = ({ formData, proceedToNextStep }: RegisterStepProps) => {
  const [school, setSchool] = useState<string>(formData.school);
  const [major, setMajor] = useState<string>(formData.major);
  const [studentId, setStudentId] = useState<string>(formData.studentId);

  return (
    <RegisterContent>
      <div>
        <Tip margin={`0 0 ${rem(28)} 0`}>
          한번 입력한 학교와 학과, 학번은 수정이 불가해요.
        </Tip>
        <Select
          label="학교 선택"
          options={schoolOptions}
          value={school}
          onChange={e => setSchool(e.target.value)}
        />
        <Select
          style={{ marginTop: rem(16) }}
          label="학과 선택"
          options={[]}
          value={major}
          onChange={e => setMajor(e.target.value)}
        />
        <Input
          style={{ marginTop: rem(16) }}
          label="학번 입력 ex)202400000"
          type="number"
          value={studentId}
          onChange={e => setStudentId(e.target.value)}
        />
      </div>
      <Button onClick={() => proceedToNextStep({ school, major, studentId })}>
        다음
      </Button>
    </RegisterContent>
  );
};

export default SchoolStep;
