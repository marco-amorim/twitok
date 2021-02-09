import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';
import { PageContainer } from '../styles/PageContainer';
import { PageTitle } from '../styles/PageTitle';
import LoadingSpinner from '../components/LoadingSpinner';
import ClipCard from '../components/ClipCard';
import axios from 'axios';

const MyClips = () => {
	const [clips, setClips] = useState([]);
	const [session, loading] = useSession();

	useEffect(() => {
		if (!loading) {
			fetchClips();
		}
	}, [loading]);

	const fetchClips = async () => {
		if (session) {
			const response = await axios.post('/api/clips/owned', {
				userId: session.user.id,
			});

			const { clips } = response.data;

			setClips(clips);
		}
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
					editMode={true}
				/>
			);
		});
	};

	return (
		<PageContainer>
			<PageTitle>My Clips</PageTitle>
			{loading ? (
				<LoadingSpinner
					color="var(--purple-default)"
					height="50px"
					width="50px"
				/>
			) : (
				renderClips()
			)}
		</PageContainer>
	);
};

export default MyClips;
