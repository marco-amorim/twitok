import styled from 'styled-components';

export const HeaderContainer = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
	margin-bottom: 125px;
	font-size: 1.2rem;
`;

export const HeaderLogo = styled.h1`
	font-size: 2rem;
	display: flex;
	justify-content: center;
	cursor: default;

	span {
		color: var(--light-a-hover);
	}
`;

export const HeaderLogin = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
	border: none;
	outline: none;
	background: none;
	font-size: 1rem;
	color: var(--light-text-base);
	cursor: pointer;

	&:hover {
		color: var(--light-a-hover);
	}
`;
