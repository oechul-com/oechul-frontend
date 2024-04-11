interface StepProps {
  onNext: () => void;
}

const EmailStep = ({ onNext }: StepProps) => (
  <div>
    <label>
      이메일:
      <input type="email" />
    </label>
    <button onClick={onNext}>다음</button>
  </div>
);

export default EmailStep;
