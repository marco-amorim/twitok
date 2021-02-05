import { Form } from 'formik';
import styled from 'styled-components';
import { buttonStyles } from '../../styles/buttonStyles';

export const FormContainer = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 300px;
`;

export const FormButton = styled.button`
	${buttonStyles}
	margin-top: 30px;
`;
