import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";

interface ConfirmDeleteDialoguePropTypes {
  open: boolean;
  handleClose: () => void;
  deleteHandler: () => void;
}

const ConfirmDeleteDialog = ({
  open,
  handleClose,
  deleteHandler,
}: ConfirmDeleteDialoguePropTypes) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this group?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={deleteHandler} color="error">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteDialog;
