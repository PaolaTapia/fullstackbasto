import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

interface DialogContentProps {
  children?: React.ReactNode;
  title: string;
  acceptButtonText: string;
  cancelButtonText: string;
  editButtonText?: string;
  deleteButtonText?: string;
  openModal: boolean;
  onClose: (value: boolean) => void;
  onSave: () => void;
  onEdit?: () => void;
  isDisabled: () => boolean;
  edit?: boolean;
}

const ModalComponent: React.FC<DialogContentProps> = ({
  children,
  openModal,
  title,
  acceptButtonText,
  cancelButtonText,
  editButtonText,
  deleteButtonText,
  onClose,
  onSave,
  onEdit,
  isDisabled,
  edit,
}) => (
  <div>
    <BootstrapDialog
      onClose={() => onClose(false)}
      aria-labelledby="customized-dialog-title"
      open={openModal}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={() => onClose(false)}
      >
        {title}
      </BootstrapDialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        {
          edit
            ? (
              <Button autoFocus onClick={() => {
                onSave();
                onClose(false);
              }}
              >
                {deleteButtonText}
              </Button>
            )
            : null}
        {edit ? (<Button autoFocus onClick={() => {
          onEdit && onEdit();
          onClose(false);
        }}
          disabled={isDisabled()}
        >
          {editButtonText}
        </Button>)
          : (<Button
            autoFocus
            onClick={() => {
              onSave();
              onClose(false);
            }}
            disabled={isDisabled()}
          >
            {acceptButtonText}
          </Button>)}

        <Button autoFocus onClick={() => onClose(false)}>
          {cancelButtonText}
        </Button>


      </DialogActions>
    </BootstrapDialog>
  </div>
);

export default ModalComponent;