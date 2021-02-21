import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PageContainer } from '../styles/PageContainer';
import { PageTitle } from '../styles/PageTitle';
import { useSession } from 'next-auth/client';
import ClipCard from '../components/ClipCard';
import LoadingSpinner from '../components/LoadingSpinner';

const NewClips = () => {
	const [clips, setClips] = useState([]);
	const [skip, setSkip] = useState(0);
	const [session, loading] = useSession();

	useEffect(() => {
		const fetchClips = async () => {
			try {
				const response = await axios.get(`/api/clips?skip=${skip}`);
				const { data } = response.data;
				if (clips.length > 0) {
					console.log([...clips, ...data]);
					setClips([...clips, ...data]);
				} else {
					setClips(data);
				}
			} catch (error) {
				console.log(error);
			}
		};

		fetchClips();
	}, [skip]);

	useEffect(() => {
		addScrollToWindow();

		return () => {
			resetScrollOnWindow();
		};
	});

	const handleScroll = () => {
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
			if (skip != clips.length) {
				setSkip(clips.length);
			}
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
					editMode={false}
				/>
			);
		});
	};

	const addScrollToWindow = () => {
		window.addEventListener('scroll', handleScroll);
	};

	const resetScrollOnWindow = () => {
		window.removeEventListener('scroll', handleScroll);
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
