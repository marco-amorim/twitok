import styled from 'styled-components';

export const HeaderMenu = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 40px 0px;
	font-size: 1.2rem;

	@media (max-width: 767px) {
		flex-direction: column;
		margin: 0px;
	}
`;

export const HeaderTitle = styled.h1`
	display: flex;
	justify-content: center;
	color: var(--purple-default);
	margin: 30px 0px;
	span {
		color: var(--light-text-base);
	}
`;

export const HeaderLogin = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0px;
	right: 0px;
	padding: 10px 15px 10px 15px;
	border: none;
	border-radius: 5px;
	outline: none;
	background-color: var(--purple-default);
	font-size: 1rem;
	color: var(--white);
	cursor: pointer;
	transition: background-color 0.2s;
	height: 45px;

	&:hover {
		color: var(--white);
		background-color: var(--bg-button-hover);
	}

	@media (max-width: 767px) {
		right: 30px;
	}
`;

export const HeaderContainer = styled.div`
	position: relative;
`;
