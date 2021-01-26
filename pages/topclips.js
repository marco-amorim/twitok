import axios from 'axios';
import React, { useEffect, useState } from 'react';
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

		const clips = await axios.get(
			'https://api.twitch.tv/helix/clips?game_id=509658',
			{
				headers: {
					'client-id': process.env.TWITCH_CLIENT_ID,
					Authorization: 'Bearer ' + access_token,
				},
			}
		);

		const { data } = clips.data;

		setClips(data);

		console.log(data);
	};

	return (
		<PageContainer>
			<PageTitle>Top Clips</PageTitle>
			{clips.map((clip, index) => {
				return (
					<iframe
						key={index}
						src={`${clip.embed_url}&parent=localhost`}
						allowfullscreen="true"
						width="500px"
						height="400px"
					/>
				);
			})}
		</PageContainer>
	);
};

export default TopClips;
