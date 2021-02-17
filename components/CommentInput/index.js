import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';
import { CommentForm, CommentFormContainer } from './styles';
import { AddComment } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';

const CommentInput = ({ onSubmit }) => {
	const initialValues = {
		text: '',
	};

	const handleSubmit = (values, actions) => {
		onSubmit(values, actions);
	};

	return (
		<CommentFormContainer onSubmit={handleSubmit} initialValues={initialValues}>
			<CommentForm>
				<Field
					required={true}
					as={TextField}
					autoComplete="off"
					label="Comment"
					name="text"
					fullWidth
					type="text"
					helperText={<ErrorMessage name="text" />}
				/>

				<IconButton type="submit">
					<AddComment />
				</IconButton>
			</CommentForm>
		</CommentFormContainer>
	);
};

CommentInput.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default CommentInput;
