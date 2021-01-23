import React from 'react';

import kappaImg from '../../assets/images/Kappa.png';
import landingImg from '../../assets/images/landing.svg';
import {
	LandingContainer,
	LandingIcon,
	LandingImage,
	LandingTitle,
} from './styles';

const Landing = () => {
	return (
		<LandingContainer>
			<LandingTitle>
				Real people, real videos
				<LandingIcon src={kappaImg} alt="Kappa" />
			</LandingTitle>

			<LandingImage src={landingImg} alt="Landing" />
		</LandingContainer>
	);
};

export default Landing;
