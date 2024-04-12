import { rem } from '@oechul/styles';
import { Input } from '@oechul/ui';
import { useState } from 'react';

import Tip from '@/components/Tip';
import { RegisterContent } from '@/pages/auth/auth.styles.ts';
import { RegisterStepProps } from '@/pages/auth/register';

const SchoolStep = ({ formData }: RegisterStepProps) => {
  // const [school, setSchool] = useState<string>(formData.school);
  // const [major, setMajor] = useState<string>(formData.major);
  const [studentId, setStudentId] = useState<string>(formData.studentId);

  return (
    <RegisterContent>
      <div>
        <Tip margin={`0 0 ${rem(28)} 0`}>
          한번 입력한 학교와 학과, 학번은 수정이 불가해요.
        </Tip>
        <Input
          label="학번 입력 ex)202400000"
          type="number"
          value={studentId}
          onChange={e => setStudentId(e.target.value)}
        />
      </div>
      {/*<Button onClick={() => proceedToNextStep({ school, major, studentId })}>*/}
      {/*  다음*/}
      {/*</Button>*/}
    </RegisterContent>
  );
};

export default SchoolStep;
