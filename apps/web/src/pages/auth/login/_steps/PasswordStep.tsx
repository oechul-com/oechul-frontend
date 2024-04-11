interface StepProps {
  onNext: () => void;
}

const PasswordStep = ({ onNext }: StepProps) => (
  <div>
    <label>
      비밀번호:
      <input type="password" />
    </label>
    <button onClick={onNext}>다음</button>
  </div>
);

export default PasswordStep;
