import axios, { AxiosRequestConfig } from 'axios';

import { HttpResponse } from '@/types/http.ts';

const instance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return refreshAccessToken(originalRequest);
    }
    return Promise.reject(error);
  },
);

async function refreshAccessToken(requestConfig: AxiosRequestConfig) {
  try {
    const response = await instance.post<HttpResponse<string>>('/v1/token');
    if (response.data.code.startsWith('2')) {
      return instance(requestConfig);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        'Refresh token expired:',
        error.response?.data.error.message,
      );
    } else {
      console.error('Error during access token refresh:', error);
    }
  }
  return Promise.reject(new Error('Token refresh failed'));
}

export default instance;
