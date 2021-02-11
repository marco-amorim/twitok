import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';
import { FormButton, FormContainer } from './styles';
import axios from 'axios';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const ClipForm = ({ user }) => {
	const router = useRouter();

	const initialValues = {
		title: '',
		clipId: '',
	};

	const handleSubmit = (values, actions) => {
		const newClip = { ...values, user };
		axios.post('/api/clips/create', newClip);

		actions.resetForm();
		router.push('/myclips');
	};

	return (
		<Formik onSubmit={handleSubmit} initialValues={initialValues}>
			<FormContainer>
				<Field
					required={true}
					as={TextField}
					autoComplete="off"
					label="Title"
					name="title"
					fullWidth
					type="text"
					helperText={<ErrorMessage name="title" />}
				/>

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

ClipForm.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string,
		image: PropTypes.string,
		email: PropTypes.string,
	}).isRequired,
};

export default ClipForm;
