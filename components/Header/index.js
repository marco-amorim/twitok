import React from 'react';
import {
	HeaderLogin,
	HeaderTitle,
	HeaderMenu,
	HeaderContainer,
} from './styles';
import { signIn, useSession } from 'next-auth/client';
import TabMenu from '../TabMenu';
import LoadingSpinner from '../LoadingSpinner';
import UserMenu from '../UserMenu';

const Header = () => {
	const [session, loading] = useSession();

	const renderLoginOptions = () => {
		if (session) {
			return <UserMenu userPhoto={session.user.image} />;
		}

		return <HeaderLogin onClick={signIn}>Sign In</HeaderLogin>;
	};

	return (
		<HeaderContainer>
			<HeaderTitle>
				Twi<span>tok</span>
			</HeaderTitle>
			<HeaderMenu>
				{loading ? (
					<HeaderLogin disabled={true} style={{ pointerEvents: 'none' }}>
						<LoadingSpinner height="25px" width="25px" />
					</HeaderLogin>
				) : (
					renderLoginOptions()
				)}

				<TabMenu />
			</HeaderMenu>
		</HeaderContainer>
	);
};

export default Header;
