import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { TextField } from '@material-ui/core';
import { FormButton, FormContainer } from './styles';

const ClipForm = () => {
	const initialValues = {
		clipUrl: '',
	};

	const handleSubmit = (values, actions) => {
		console.log(values);
	};

	return (
		<Formik onSubmit={handleSubmit} initialValues={initialValues}>
			<FormContainer>
				<Field
					required={true}
					as={TextField}
					autoComplete="off"
					label="Clip URL"
					name="clipUrl"
					fullWidth
					type="text"
					helperText={<ErrorMessage name="clipUrl" />}
				/>
				<FormButton type="submit">Submit</FormButton>
			</FormContainer>
		</Formik>
	);
};

export default ClipForm;
