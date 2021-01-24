import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

import { PageContainer } from '../styles/PageContainer';
import { PageTitle } from '../styles/PageTitle';

const Landing = () => {
	const [session, loading] = useSession();
	return (
		<PageContainer>
			<PageTitle>Moments to remember</PageTitle>
			<img src="/images/landing.svg" alt="Landing" />

			{!session && (
				<>
					Not signed in <br />
					<button onClick={signIn}>Sign in</button>
				</>
			)}
			{session && (
				<>
					Signed in as {session.user.email} <br />
					<button onClick={signOut}>Sign out</button>
				</>
			)}
		</PageContainer>
	);
};

export default Landing;
