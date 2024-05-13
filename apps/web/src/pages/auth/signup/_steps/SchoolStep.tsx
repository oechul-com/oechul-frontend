import { rem } from '@oechul/styles';
import { Button, Input, Select } from '@oechul/ui';
import { FormEvent, useState, useMemo } from 'react';

import Tip from '@/components/Tip';
import useUniversitiesQuery from '@/hooks/queries/useUniversitiesQuery.ts';
import useUniversityDepartmentsQuery from '@/hooks/queries/useUniversityDepartmentsQuery.ts';
import { SignUpContent } from '@/pages/auth/auth.styles.ts';
import { SignUpStepProps } from '@/pages/auth/signup/types.ts';

const SchoolStep = ({ formData, proceed }: SignUpStepProps) => {
  const [school, setSchool] = useState<string>(formData.universityId);
  const [major, setMajor] = useState<string>(formData.departmentId);
  const [studentId, setStudentId] = useState<string>(formData.studentNumber);

  const { data: universities } = useUniversitiesQuery();
  const { data: departments } = useUniversityDepartmentsQuery(school);

  const universityOptions = useMemo(() => {
    if (!universities || !universities.code.startsWith('2')) return [];

    return universities.result.universityList.map(university => ({
      value: university.id.toString(),
      label: university.name,
    }));
  }, [universities]);

  const departmentOptions = useMemo(() => {
    if (!departments || !departments.code.startsWith('2')) return [];

    return departments.result.departmentList.map(department => ({
      value: department.id.toString(),
      label: department.name,
    }));
  }, [departments]);

  const isSchoolStepValid = useMemo(() => {
    return school !== '' && major !== '' && studentId.length >= 7;
  }, [school, major, studentId]);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isSchoolStepValid)
      proceed({
        universityId: school,
        departmentId: major,
        studentNumber: studentId,
      });
  };

  return (
    <SignUpContent as="form" onSubmit={handleFormSubmit}>
      <div>
        <Tip margin={`0 0 ${rem(28)} 0`}>
          한번 입력한 학교와 학과, 학번은 수정이 불가해요.
        </Tip>
        <Select
          label="학교 선택"
          options={universityOptions}
          value={school}
          onChange={e => {
            setSchool(e.target.value);
            setMajor('');
          }}
        />
        <Select
          style={{ marginTop: rem(16) }}
          label="학과 선택"
          options={departmentOptions}
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
    </SignUpContent>
  );
};

export default SchoolStep;
