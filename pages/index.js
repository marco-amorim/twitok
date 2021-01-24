import React from 'react';

import LandingImg from '../assets/images/LandingImg';

import { PageContainer } from '../assets/styles/PageContainer';
import { PageTitle } from '../assets/styles/PageTitle';

const Landing = () => {
	return (
		<PageContainer>
			<PageTitle>Moments to remember</PageTitle>
			<LandingImg height="275px" width="300px" />
		</PageContainer>
	);
};

export default Landing;
