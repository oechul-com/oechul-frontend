import instance from '@/apis/index.ts';
import {
  GwatingCreatePayload,
  GwatingCreateResponse,
  GwatingJoinPayload,
  GwatingJoinResponse,
  GwatingType,
} from '@/types/gwating.ts';
import { HttpResponse } from '@/types/http.ts';

export const getGwatingTeams = async () => {
  const { data } =
    await instance.get<HttpResponse<GwatingType[]>>('/v1/gwating/teams');

  return data;
};

export const postGwatingTeam = async (body: GwatingCreatePayload) => {
  const { data } = await instance.post<HttpResponse<GwatingCreateResponse>>(
    '/v1/gwating/teams',
    body,
  );

  return data;
};

export const postGwatingTeamJoin = async (body: GwatingJoinPayload) => {
  const { data } = await instance.post<HttpResponse<GwatingJoinResponse>>(
    '/v1/gwating/teams/join',
    body,
  );

  return data;
};
