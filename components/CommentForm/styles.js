import styled from 'styled-components';
import { Form, Formik } from 'formik';

export const CommentFormContainer = styled(Formik)`
	display: flex;
	justify-content: center;
`;

export const CommentFormStyled = styled(Form)`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 2rem auto 1.5rem auto;
	width: 90%;
`;
