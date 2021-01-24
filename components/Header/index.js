import React from 'react';
import TabMenu from '../TabMenu';
import { HeaderContainer, HeaderLogin, HeaderLogo } from './styles';
import LoadingSpinner from '../LoadingSpinner';

const Header = () => {
	return (
		<>
			<HeaderLogo>
				<img src="/images/logo-light.svg" alt="Logo" />
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
