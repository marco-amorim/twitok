import React, { Component } from 'react';
import TabMenu from '../TabMenu';
import { HeaderContainer, HeaderLogin, HeaderLogo } from './styles';
import logoLight from '../../assets/images/logo-light.svg';

class Header extends Component {
	render() {
		return (
			<>
				<HeaderLogo>
					<img src={logoLight} alt="logo" />
				</HeaderLogo>
				<HeaderContainer>
					<HeaderLogin onClick={() => window.alert('login!')}>
						Sign In
					</HeaderLogin>
					<TabMenu />
				</HeaderContainer>
			</>
		);
	}
}

export default Header;
