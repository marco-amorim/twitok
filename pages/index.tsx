import React from 'react';

import { PageContainer } from '../styles/PageContainer';
import { PageTitle } from '../styles/PageTitle';

const Landing = () => {
	return (
		<PageContainer>
			<PageTitle>Moments to remember</PageTitle>
			<img src="/images/landing.svg" alt="Landing" />
		</PageContainer>
	);
};

export default Landing;
