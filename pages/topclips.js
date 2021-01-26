import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ClipCard from '../components/ClipCard';
import { PageContainer } from '../styles/PageContainer';
import { PageTitle } from '../styles/PageTitle';

const TopClips = () => {
	const [clips, setClips] = useState([]);

	useEffect(() => {
		fetchTopClips();
	}, []);

	const fetchTopClips = async () => {
		const response = await axios.get('/api/token/twitch');
		const { access_token } = response.data;

		const clips = await axios.get('https://api.twitch.tv/helix/clips', {
			headers: {
				'client-id': process.env.TWITCH_CLIENT_ID,
				Authorization: 'Bearer ' + access_token,
			},
			params: {
				game_id: '509658',
				first: '5',
			},
		});

		const { data } = clips.data;

		setClips(data);

		console.log(data);
	};

	return (
		<PageContainer>
			<PageTitle>Top Clips</PageTitle>
			{clips.map((clip, index) => {
				return <ClipCard embedUrl={`${clip.embed_url}&parent=localhost`} />;
			})}
		</PageContainer>
	);
};

export default TopClips;
