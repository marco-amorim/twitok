import React from 'react';

import { PageContainer } from '../assets/styles/PageContainer';
import { PageTitle } from '../assets/styles/PageTitle';

import landingImg from '../assets/images/landing.svg';

const Landing = () => {
	return (
		<PageContainer>
			<PageTitle>Moments to remember</PageTitle>
			<img src={landingImg} alt="Landing" />
		</PageContainer>
	);
};

export default Landing;
