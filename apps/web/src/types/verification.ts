export enum VerificationStatus {
  VERIFIED = 'VERIFIED',
  NOT_VERIFIED = 'NOT_VERIFIED',
}

export type VerificationType = {
  status: VerificationStatus;
};
