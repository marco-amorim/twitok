import React from 'react';

import kappaImg from '../../assets/images/Kappa.png';
import landingImg from '../../assets/images/landing.svg';
import { LandingIcon, LandingImage } from './styles';

import { PageContainer } from '../../assets/styles/PageContainer';
import { PageTitle } from '../../assets/styles/PageTitle';

const Landing = () => {
	return (
		<PageContainer>
			<PageTitle>
				Real people, real videos
				<LandingIcon src={kappaImg} alt="Kappa" />
			</PageTitle>

			<LandingImage src={landingImg} alt="Landing" />
		</PageContainer>
	);
};

export default Landing;
