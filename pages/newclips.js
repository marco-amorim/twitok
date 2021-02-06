import axios from 'axios';
import React, { useState } from 'react';
import { PageContainer } from '../styles/PageContainer';
import { PageTitle } from '../styles/PageTitle';
import ClipCard from '../components/ClipCard';

const NewClips = () => {
	const [clips, setClips] = useState([]);

	const fetchClips = async () => {
		try {
			const { data } = await axios.get('/api/clips');

			const { clips } = data;

			setClips(clips);
		} catch (error) {
			console.log('Unable to fetch clips, ' + error);
		}
	};

	useState(() => {
		fetchClips();
	}, []);

	const renderClips = () => {
		return clips.map((clip, index) => {
			return (
				<ClipCard
					key={index}
					creatorName={clip.user.name}
					title={clip.title}
					clipId={clip.clipId}
					userPhoto={clip.user.image}
				/>
			);
		});
	};

	return (
		<PageContainer>
			<PageTitle>New Clips</PageTitle>
			{renderClips()}
		</PageContainer>
	);
};

export default NewClips;
