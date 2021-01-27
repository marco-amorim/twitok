import React from 'react';
import ClipForm from '../components/ClipForm';
import { PageContainer } from '../styles/PageContainer';
import { PageTitle } from '../styles/PageTitle';

const NewClip = () => {
	return (
		<PageContainer>
			<PageTitle>New Clip</PageTitle>
			<ClipForm />
		</PageContainer>
	);
};

export default NewClip;
