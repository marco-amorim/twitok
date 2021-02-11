import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ConfirmModal = ({ isOpen, onConfirm, onDismiss, title, description }) => {
	const handleClose = () => {
		onDismiss();
	};

	const handleAction = () => {
		onConfirm();
	};

	return (
		<Dialog
			open={isOpen}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					{description}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
					No
				</Button>
				<Button onClick={handleAction} color="primary" autoFocus>
					Yes
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ConfirmModal;
