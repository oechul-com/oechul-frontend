import Dialog from '@/components/Modal/Dialog';

interface ConfirmDialogProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ConfirmDialog = ({ isOpen, onToggle }: ConfirmDialogProps) => {
  return (
    <Dialog isOpen={isOpen} onToggle={onToggle}>
      <></>
    </Dialog>
  );
};

export default ConfirmDialog;
