import { css } from 'styled-components';

export const buttonStyles = css`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 15px 10px 15px;
	border: none;
	border-radius: 5px;
	outline: none;
	background-color: var(--purple-default);
	color: var(--white);
	font-size: 1rem;
	cursor: pointer;
	transition: background-color 0.2s;
	height: 45px;

	&:hover {
		color: var(--white);
		background-color: var(--bg-button-hover);
	}
`;
