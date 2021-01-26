import axios from 'axios';
import React, { useEffect } from 'react';
import { PageContainer } from '../styles/PageContainer';
import { PageTitle } from '../styles/PageTitle';

const TopClips = () => {
	useEffect(() => {
		fetchTopClips();
	});

	const fetchTopClips = async () => {
		const clips = await (
			await axios.get('https://api.twitch.tv/kraken/clips/top')
		).headers({
			'Client-ID': process.env.TWITCH_CLIENT_ID,
		});

		console.log(clips);
	};

	return (
		<PageContainer>
			<PageTitle>Top Clips</PageTitle>
		</PageContainer>
	);
};

export default TopClips;
