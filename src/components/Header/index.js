import React from 'react';
import TabMenu from '../TabMenu';
import { HeaderContainer, HeaderLogin, HeaderLogo } from './styles';
import logoLight from '../../assets/images/logo-light.svg';
import { signInWithGoogle, getAuth, signOut } from '../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoadingSpinner from '../LoadingSpinner';

const Header = () => {
	const [user, loading] = useAuthState(getAuth());

	const renderMenu = () => {
		if (user) {
			return <HeaderLogin onClick={signOut}>Logout</HeaderLogin>;
		}
		return <HeaderLogin onClick={signInWithGoogle}>Sign In</HeaderLogin>;
	};

	return (
		<>
			<HeaderLogo>
				<img src={logoLight} alt="logo" />
			</HeaderLogo>
			<HeaderContainer>
				{loading ? (
					<HeaderLogin disabled={true} style={{ pointerEvents: 'none' }}>
						<LoadingSpinner height="25px" width="25px" />
					</HeaderLogin>
				) : (
					renderMenu()
				)}

				<TabMenu />
			</HeaderContainer>
		</>
	);
};

export default Header;
