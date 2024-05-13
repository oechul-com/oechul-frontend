import { useMutation } from '@tanstack/react-query';

import { postSignUp } from '@/apis/auth.ts';
import { QUERIES } from '@/constants.ts';

export default function useSignUpMutation() {
  return useMutation({
    mutationKey: [QUERIES.AUTH.LOGIN_KEY],
    mutationFn: postSignUp,
  });
}
