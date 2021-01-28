import React from 'react';
import ClipForm from '../components/ClipForm';
import { PageContainer } from '../styles/PageContainer';
import { PageTitle } from '../styles/PageTitle';
import { useSession } from 'next-auth/client';
import LoadingSpinner from '../components/LoadingSpinner';

const NewClip = () => {
	const [session, loading] = useSession();

	const renderForm = () => {
		if (session) {
			return <ClipForm userId={session.user.id} />;
		}

		return <h2>You need to be logged in for this :/</h2>;
	};

	return (
		<PageContainer>
			<PageTitle>New Clip</PageTitle>
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

export default NewClip;
