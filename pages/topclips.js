import axios from 'axios';
import React, { useEffect } from 'react';
import { PageContainer } from '../styles/PageContainer';
import { PageTitle } from '../styles/PageTitle';
import { useSession } from 'next-auth/client';

const TopClips = () => {
	const [session, loading] = useSession();

	useEffect(() => {
		fetchTopClips();
	});

	const fetchTopClips = async () => {
		const response = await axios.get('/api/token/twitch');
		const { access_token } = response.data;

		const clips = await axios.get(
			'https://api.twitch.tv/helix/clips?game_id=509658',
			{
				headers: {
					'client-id': process.env.TWITCH_CLIENT_ID,
					Authorization: 'Bearer ' + access_token,
				},
			}
		);

		console.log(clips);
	};

	return (
		<PageContainer>
			<PageTitle>Top Clips</PageTitle>
		</PageContainer>
	);
};

export default TopClips;
