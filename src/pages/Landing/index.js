import React from 'react';

import landingImg from '../../assets/images/landing.svg';
import { LandingImage } from './styles';

import { PageContainer } from '../../assets/styles/PageContainer';
import { PageTitle } from '../../assets/styles/PageTitle';

const Landing = () => {
	return (
		<PageContainer>
			<PageTitle>Moments to remember</PageTitle>

			<LandingImage src={landingImg} alt="Landing" />
		</PageContainer>
	);
};

export default Landing;
