import axios from 'axios';
import { useSession } from 'next-auth/client';
import React, { useEffect, useState } from 'react';
import ClipCard from '../components/ClipCard';
import InfiniteScroll from '../components/InfiniteScroll';
import LoadingSpinner from '../components/LoadingSpinner';
import { PageContainer } from '../styles/PageContainer';
import { PageTitle } from '../styles/PageTitle';

const TopClips = () => {
	const [clips, setClips] = useState([]);
	const [session, loading] = useSession();
	const [skip, setSkip] = useState(0);
	const [loadingScroll, setLoadingScroll] = useState(false);

	useEffect(() => {
		const fetchClips = async () => {
			try {
				const response = await axios.get(`/api/clips/top?skip=${skip}`);
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

export default TopClips;
