import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';
import { PageContainer } from '../styles/PageContainer';
import { PageTitle } from '../styles/PageTitle';
import LoadingSpinner from '../components/LoadingSpinner';
import ClipCard from '../components/ClipCard';
import InfiniteScroll from '../components/InfiniteScroll';
import axios from 'axios';
import { PageMessage } from '../styles/PageMessage';

const MyClips = () => {
	const [clips, setClips] = useState([]);
	const [clipsLoading, setClipsLoading] = useState(true);
	const [session, loading] = useSession();
	const [skip, setSkip] = useState(0);
	const [loadingScroll, setLoadingScroll] = useState(false);

	useEffect(() => {
		const fetchClips = async () => {
			if (session) {
				try {
					const response = await axios.get('/api/clips/owned', {
						params: {
							skip: skip,
							userId: session.user.id,
						},
					});
					const { data } = response.data;
					if (clips.length > 0) {
						setClips([...clips, ...data]);
					} else {
						setClipsLoading(true);
						setClips(data);
					}
				} catch (error) {
					console.log(error);
				} finally {
					setLoadingScroll(false);
					setClipsLoading(false);
				}
			}
		};

		if (!loading) {
			fetchClips();
		}
	}, [loading, skip]);

	const renderClips = () => {
		if (!loading && clips.length > 0 && session) {
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

		if (!loading && !session) {
			return <PageMessage>You need to sign in to see your clips.</PageMessage>;
		}

		if (!clipsLoading && clips.length === 0) {
			return <PageMessage>You don't have any clips yet.</PageMessage>;
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

export default MyClips;
