import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from '@material-ui/core';

const ClipForm = () => {
	const initialValues = {
		clipUrl: '',
	};

	const handleSubmit = (values, actions) => {
		console.log(values);
	};

	return (
		<Formik onSubmit={handleSubmit} initialValues={initialValues}>
			<Form>
				<Field as={TextField} name="clipUrl" />
				<button type="submit">submit</button>
			</Form>
		</Formik>
	);
};

export default ClipForm;
