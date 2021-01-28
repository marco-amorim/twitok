import styled from 'styled-components';
import { buttonStyles } from '../../styles/buttonStyles';

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
	margin: 15px 0px;
	font-size: 40px;
	user-select: none;

	span {
		color: var(--light-text-base);
	}
`;

export const HeaderLogin = styled.button`
	${buttonStyles}
	position: absolute;
	top: 0px;
	right: 0px;

	@media (max-width: 767px) {
		position: unset;
		margin-bottom: 20px;
	}
`;

export const HeaderContainer = styled.div`
	position: relative;
`;
