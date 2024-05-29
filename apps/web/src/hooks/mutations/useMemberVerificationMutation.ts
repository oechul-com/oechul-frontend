import { useMutation } from '@tanstack/react-query';

import { postMemberVerification } from '@/apis/verification.ts';
import { QUERIES } from '@/constants.ts';

export default function useMemberVerificationMutation() {
  return useMutation({
    mutationKey: [QUERIES.VERIFICATION.KEY],
    mutationFn: ({ memberId, image }: { memberId: string; image: File }) =>
      postMemberVerification(memberId, image),
  });
}
