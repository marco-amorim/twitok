import React from 'react';
import ClipForm from '../components/ClipForm';
import { PageContainer } from '../styles/PageContainer';
import { PageTitle } from '../styles/PageTitle';
import { useSession } from 'next-auth/client';
import LoadingSpinner from '../components/LoadingSpinner';
import { PageMessage } from '../styles/PageMessage';

const ShareClip = () => {
	const [session, loading] = useSession();

	const renderForm = () => {
		if (session) {
			return <ClipForm user={session.user} />;
		}

		return <PageMessage>You need to be logged in for this.</PageMessage>;
	};

	return (
		<PageContainer>
			<PageTitle>Share Clip</PageTitle>
			{loading ? (
				<LoadingSpinner
					width="50px"
					height="50px"
					color="var(--purple-default)"
				/>
			) : (
				renderForm()
			)}
		</PageContainer>
	);
};

export default ShareClip;
