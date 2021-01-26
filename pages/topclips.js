import axios from 'axios';
import React, { useEffect } from 'react';
import { PageContainer } from '../styles/PageContainer';
import { PageTitle } from '../styles/PageTitle';
import { useSession } from 'next-auth/client';

const TopClips = () => {
	return (
		<PageContainer>
			<PageTitle>Top Clips</PageTitle>
		</PageContainer>
	);
};

export default TopClips;
