import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PageContainer } from '../styles/PageContainer';
import { PageTitle } from '../styles/PageTitle';
import { useSession } from 'next-auth/client';
import ClipCard from '../components/ClipCard';
import LoadingSpinner from '../components/LoadingSpinner';

const NewClips = () => {
	const [clips, setClips] = useState([]);
	const [session, loading] = useSession();

	useEffect(() => {
		fetchClips();
	}, []);

	const fetchClips = async () => {
		const response = await axios.get('/api/clips');

		const { clips } = response.data;

		setClips(clips);
	};

	const renderClips = () => {
		return clips.map((clip, index) => {
			return (
				<ClipCard
					key={index}
					creatorName={clip.user.name}
					title={clip.title}
					twClipId={clip.clipId}
					userPhoto={clip.user.image}
					likesCount={clip.likesCount}
					dislikesCount={clip.dislikesCount}
					commentsCount={clip.commentsCount}
					currentUser={session ? session.user : null}
					mongoClipId={clip._id}
					likedBy={clip.likedBy}
					dislikedBy={clip.dislikedBy}
				/>
			);
		});
	};

	return (
		<PageContainer>
			<PageTitle>New Clips</PageTitle>
			{loading ? (
				<LoadingSpinner
					height="50px"
					width="50px"
					color="var(--purple-default)"
				/>
			) : (
				renderClips()
			)}
		</PageContainer>
	);
};

export default NewClips;
