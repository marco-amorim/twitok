import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';
import { CommentFormStyled, CommentFormContainer } from './styles';
import { Send } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';

const CommentForm = ({ onSubmit }) => {
	const initialValues = {
		comment: '',
	};

	const handleSubmit = (values) => {
		onSubmit(values);
	};

	return (
		<CommentFormContainer onSubmit={handleSubmit} initialValues={initialValues}>
			<CommentFormStyled>
				<Field
					required={true}
					as={TextField}
					autoComplete="off"
					label="Comment"
					name="comment"
					fullWidth
					type="text"
					helperText={<ErrorMessage name="comment" />}
				/>

				<IconButton type="submit">
					<Send />
				</IconButton>
			</CommentFormStyled>
		</CommentFormContainer>
	);
};

CommentForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default CommentForm;
