import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';
import { PageContainer } from '../styles/PageContainer';
import { PageTitle } from '../styles/PageTitle';
import LoadingSpinner from '../components/LoadingSpinner';
import ClipCard from '../components/ClipCard';
import axios from 'axios';
import { PageMessage } from '../styles/PageMessage';

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
		if (!loading && clips.length > 0 && session) {
			console.log(clips);
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
		}

		if (!loading && clips.length === 0) {
			return (
				<PageMessage>You still don't have any published clips.</PageMessage>
			);
		}

		if (!loading && !session) {
			return <PageMessage>You need to sign in to see your clips.</PageMessage>;
		}
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
