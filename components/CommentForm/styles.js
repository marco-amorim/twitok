import styled from 'styled-components';
import { Form, Formik } from 'formik';
import { buttonStyles } from '../../styles/buttonStyles';

export const CommentFormContainer = styled(Formik)`
	display: flex;
	justify-content: center;
`;

export const CommentFormStyled = styled(Form)`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 1.5rem auto 1.5rem auto;
	width: 90%;
`;

export const CommentFormButton = styled.button`
	${buttonStyles}
	margin-left: 1rem;
`;
