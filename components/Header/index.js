import React from 'react';
import { HeaderContainer, HeaderLogin, HeaderTitle } from './styles';
import { signIn, signOut, useSession } from 'next-auth/client';
import TabMenu from '../TabMenu';
import LoadingSpinner from '../LoadingSpinner';

const Header = () => {
	const [session, loading] = useSession();

	if (session) console.log(session);

	const renderLoginOptions = () => {
		if (session) {
			return <HeaderLogin onClick={signOut}>Sign out</HeaderLogin>;
		}

		return <HeaderLogin onClick={signIn}>Sign in</HeaderLogin>;
	};

	return (
		<>
			<HeaderTitle>
				Twi<span>tok</span>
			</HeaderTitle>
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
