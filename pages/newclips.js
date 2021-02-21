import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PageContainer } from '../styles/PageContainer';
import { PageTitle } from '../styles/PageTitle';
import { useSession } from 'next-auth/client';
import ClipCard from '../components/ClipCard';
import LoadingSpinner from '../components/LoadingSpinner';
import InfiniteScroll from '../components/InfiniteScroll';

const NewClips = () => {
	const [clips, setClips] = useState([]);
	const [skip, setSkip] = useState(0);
	const [session, loading] = useSession();
	const [loadingScroll, setLoadingScroll] = useState(false);

	useEffect(() => {
		const fetchClips = async () => {
			try {
				const response = await axios.get(`/api/clips?skip=${skip}`);
				const { data } = response.data;
				if (clips.length > 0) {
					setClips([...clips, ...data]);
				} else {
					setClips(data);
				}
			} catch (error) {
				console.log(error);
			} finally {
				setLoadingScroll(false);
			}
		};

		fetchClips();
	}, [skip]);

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
					editMode={false}
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
			<InfiniteScroll
				loading={loadingScroll}
				setLoading={setLoadingScroll}
				amount={skip}
				setAmount={setSkip}
				data={clips}
			/>
		</PageContainer>
	);
};

export default NewClips;
