import axios from 'axios';

import {
  ApplyReceivedTeamListType,
  MeetupTeamType,
  MyMeetupTeamsType,
  NewMeetupTeamListType,
} from '@/types/meetup';

export const getMyTeams = async () => {
  const { data } = await axios.post<MyMeetupTeamsType>('/api/v1/gwating/teams');

  return data;
};

export const getMeetupTeam = async (teamId: number) => {
  const { data } = await axios.post<MeetupTeamType>(
    `/api/v1/gwating/teams/${teamId}`,
  );

  return data;
};

export const getNewMeetupTeamList = async () => {
  const { data } = await axios.post<NewMeetupTeamListType>(
    '/api/v1/gwating/teams/new',
  );

  return data;
};

export const getApplyTeamListType = async (teamId: number) => {
  const { data } = await axios.post<ApplyReceivedTeamListType>(
    `/api/v1/gwating/teams/${teamId}/applications`,
  );

  return data;
};

export const getReceivedTeamListType = async (teamId: number) => {
  const { data } = await axios.post<ApplyReceivedTeamListType>(
    `/api/v1/gwating/teams/${teamId}/applications/received`,
  );

  return data;
};
