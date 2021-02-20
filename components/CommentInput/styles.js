import styled from 'styled-components';
import { Form, Formik } from 'formik';

export const CommentFormContainer = styled(Formik)`
	display: flex;
	justify-content: center;
`;

export const CommentForm = styled(Form)`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 2rem 0 1.5rem 0;
	width: 100%;
`;
