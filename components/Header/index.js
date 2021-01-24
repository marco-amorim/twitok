import React from 'react';
import TabMenu from '../TabMenu';
import { HeaderContainer, HeaderLogin, HeaderLogo } from './styles';
import LoadingSpinner from '../LoadingSpinner';
import logoLight from '../../assets/images/logo-light.svg';

const Header = () => {
	return (
		<>
			<HeaderLogo>
				<img src={logoLight} alt="Logo" />
			</HeaderLogo>
			<HeaderContainer>
				<HeaderLogin disabled={true} style={{ pointerEvents: 'none' }}>
					<LoadingSpinner height="25px" width="25px" />
				</HeaderLogin>
				<TabMenu />
			</HeaderContainer>
		</>
	);
};

export default Header;
