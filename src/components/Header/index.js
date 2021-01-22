import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TabMenu from '../TabMenu';
import { HeaderContainer, HeaderLogin, HeaderTitle } from './styles';

class Header extends Component {
	render() {
		return (
			<>
				<HeaderTitle>
					<Link to="/">Twitok</Link>
				</HeaderTitle>
				<HeaderContainer>
					<TabMenu />
					<HeaderLogin to="/">Login</HeaderLogin>
				</HeaderContainer>
			</>
		);
	}
}

export default Header;
