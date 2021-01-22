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
					<TabMenu />
					<HeaderLogin to="/">Login</HeaderLogin>
				</HeaderContainer>
			</>
		);
	}
}

export default Header;
