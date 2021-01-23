import styled from 'styled-components';

export const HeaderContainer = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
	margin-bottom: 125px;
	font-size: 1.2rem;

	@media (max-width: 767px) {
		flex-direction: column;
	}
`;

export const HeaderLogo = styled.h1`
	font-size: 2rem;
	display: flex;
	justify-content: center;
	cursor: default;

	span {
		color: var(--purple-default);
	}
`;

export const HeaderLogin = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 10px;
	right: 10px;
	padding: 10px 15px 10px 15px;
	border: none;
	border-radius: 5px;
	outline: none;
	background-color: var(--purple-default);
	font-size: 1rem;
	color: var(--white);
	cursor: pointer;
	transition: background-color 0.2s;

	&:hover {
		color: var(--white);
		background-color: var(--bg-button-hover);
	}

	@media (max-width: 767px) {
		position: unset;
		margin-bottom: 30px;
	}
`;
