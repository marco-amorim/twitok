import axios from 'axios';
import { useSession } from 'next-auth/client';
import React, { useEffect, useState } from 'react';
import ClipCard from '../components/ClipCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { PageContainer } from '../styles/PageContainer';
import { PageTitle } from '../styles/PageTitle';

const TopClips = () => {
	const [clips, setClips] = useState([]);
	const [session, loading] = useSession();

	useEffect(() => {
		fetchClips();
	}, []);

	const fetchClips = async () => {
		const response = await axios.get('/api/clips/top');

		const { clips } = response.data;

		setClips(clips);
	};

	return (
		<PageContainer>
			<PageTitle>Top Clips</PageTitle>
			{loading ? (
				<LoadingSpinner
					height="50px"
					width="50px"
					color="var(--purple-default)"
				/>
			) : (
				clips.map((clip, index) => {
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
							editMode={false}
						/>
					);
				})
			)}
		</PageContainer>
	);
};

export default TopClips;
