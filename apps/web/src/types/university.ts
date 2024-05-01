export type UniversityType = {
  id: number;
  name: string;
  shortName: string;
};

export type UniversitiesType = {
  universityList: UniversityType[];
};

export type UniversityDepartmentType = {
  id: number;
  university: UniversityType;
  name: string;
  shortName: string;
};

export type UniversityDepartmentsType = {
  departmentList: UniversityDepartmentType[];
};
