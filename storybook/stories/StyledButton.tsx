interface ButtonProps {
  label: string;
  backgroundColor?: string;
}

function StyledButton({ label, backgroundColor = '#fff' }: ButtonProps) {
  return (
    <button type="button" style={{ backgroundColor: `${backgroundColor}` }}>
      {label}
    </button>
  );
}

export default StyledButton;
