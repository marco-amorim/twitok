import React from 'react';
import TabMenu from '../TabMenu';
import { HeaderContainer, HeaderLogin, HeaderLogo } from './styles';
import LoadingSpinner from '../LoadingSpinner';
import { signIn, signOut, useSession } from 'next-auth/client';

const Header = () => {
	const [session, loading] = useSession();

	const renderLoginOptions = () => {
		if (session) {
			return <HeaderLogin onClick={signOut}>Sign out</HeaderLogin>;
		}

		return <HeaderLogin onClick={signIn}>Sign in</HeaderLogin>;
	};

	return (
		<>
			<HeaderLogo>
				<img src="/images/logo-light.svg" alt="Logo" />
			</HeaderLogo>
			<HeaderContainer>
				{loading ? (
					<HeaderLogin disabled={true} style={{ pointerEvents: 'none' }}>
						<LoadingSpinner height="25px" width="25px" />
					</HeaderLogin>
				) : (
					renderLoginOptions()
				)}

				<TabMenu />
			</HeaderContainer>
		</>
	);
};

export default Header;
