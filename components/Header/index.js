import React from 'react';
import TabMenu from '../TabMenu';
import { HeaderContainer, HeaderLogin, HeaderLogo } from './styles';
import LoadingSpinner from '../LoadingSpinner';
import LogoLight from '../../assets/images/LogoLight';

const Header = () => {
	return (
		<>
			<HeaderLogo>
				<LogoLight />
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
