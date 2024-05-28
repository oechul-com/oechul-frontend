import { useMutation } from '@tanstack/react-query';

import { postSignIn } from '@/apis/permission.ts';
import { QUERIES } from '@/constants.ts';

export default function useSignInMutation() {
  return useMutation({
    mutationKey: [QUERIES.AUTH.LOGIN_KEY],
    mutationFn: postSignIn,
  });
}
