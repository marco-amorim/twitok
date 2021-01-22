import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
	margin-bottom: 125px;
	font-size: 1.2rem;
`;

export const HeaderTitle = styled.h1`
	font-size: 2rem;
	display: flex;
	justify-content: center;
`;

export const HeaderLogin = styled(Link)`
	position: absolute;
	top: 20px;
	right: 20px;
`;
