import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../../components/ui/dialog';

import styles from './SaveDialog.module.scss';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  tokenID: string;
};
const SaveDialog = ({ isOpen, setIsOpen, tokenID }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={open => setIsOpen(open)}>
      <DialogContent className={styles.container}>
        <DialogHeader>
          <DialogTitle>save as</DialogTitle>
        </DialogHeader>
        <div>{tokenID}</div>
      </DialogContent>
    </Dialog>
  );
};

export { SaveDialog };
