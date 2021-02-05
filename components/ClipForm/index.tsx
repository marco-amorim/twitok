import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';
import { FormButton, FormContainer } from './styles';
import axios from 'axios';
import { useRouter } from 'next/router';

const ClipForm = ({ user }) => {
	const router = useRouter();

	const initialValues = {
		clipId: '',
	};

	const handleSubmit = (values, actions) => {
		const newClip = { ...values, user };
		axios.post('/api/clips/create', newClip);

		actions.resetForm();
		router.push('/newclips');
	};

	return (
		<Formik onSubmit={handleSubmit} initialValues={initialValues}>
			<FormContainer>
				<Field
					required={true}
					as={TextField}
					autoComplete="off"
					label="Clip ID"
					name="clipId"
					fullWidth
					type="text"
					helperText={<ErrorMessage name="clipId" />}
				/>
				<FormButton type="submit">Submit</FormButton>
			</FormContainer>
		</Formik>
	);
};

export default ClipForm;
