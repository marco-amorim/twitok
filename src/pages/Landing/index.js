import React from 'react';

import kappaImg from '../../assets/images/Kappa.png';
import landingImg from '../../assets/images/landing.svg';
import { LandingIcon, LandingImage, LandingTitle } from './styles';

import { PageContainer } from '../../assets/styles/PageContainer';

const Landing = () => {
	return (
		<PageContainer>
			<LandingTitle>
				Real people, real videos
				<LandingIcon src={kappaImg} alt="Kappa" />
			</LandingTitle>

			<LandingImage src={landingImg} alt="Landing" />
		</PageContainer>
	);
};

export default Landing;
