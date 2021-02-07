import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
	CommentOutlined,
	ThumbDown,
	ThumbDownOutlined,
	ThumbUp,
	ThumbUpOutlined,
} from '@material-ui/icons';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 625,
		marginBottom: '35px',

		'@media(max-width: 767px)': {
			width: 330,
		},
	},
	iframe: {
		width: '100%',
		height: 350,

		'@media(max-width: 767px)': {
			height: 185,
		},
	},
	rightIcons: {
		marginLeft: 'auto',
		marginRight: '12px',
	},
}));

const ClipCard = ({
	twClipId,
	title,
	creatorName,
	userPhoto,
	commentsCount,
	likesCount,
	dislikesCount,
	currentUser,
	mongoClipId,
	likedBy,
	dislikedBy,
}) => {
	const classes = useStyles();
	const [isLiked, setIsLiked] = useState(
		currentUser && likedBy.includes(currentUser.id) ? true : false
	);
	const [isDisliked, setIsDisliked] = useState(
		currentUser && dislikedBy.includes(currentUser.id) ? true : false
	);
	const [likes, setLikes] = useState(likesCount);
	const [dislikes, setDislikes] = useState(dislikesCount);

	const handleLike = async () => {
		if (currentUser) {
			try {
				await axios.put('/api/clips/like', {
					userId: currentUser.id,
					clipId: mongoClipId,
					isLiked: isLiked,
					isDisliked: isDisliked,
				});

				isLiked && setLikes(likes - 1);
				!isLiked && setLikes(likes + 1);
				isDisliked && setDislikes(dislikes - 1);

				setIsLiked(!isLiked);
				setIsDisliked(false);
			} catch (error) {
				console.log(error);
			}
		} else {
			window.alert('Sign in to interact with clips! :]');
		}
	};

	const handleDislike = async () => {
		if (currentUser) {
			try {
				await axios.put('/api/clips/dislike', {
					userId: currentUser.id,
					clipId: mongoClipId,
					isDisliked: isDisliked,
					isLiked: isLiked,
				});

				isDisliked && setDislikes(dislikes - 1);
				!isDisliked && setDislikes(dislikes + 1);
				isLiked && setLikes(likes - 1);

				setIsDisliked(!isDisliked);
				setIsLiked(false);
			} catch (error) {
				console.log(error);
			}
		} else {
			window.alert('Sign in to interact with clips! :]');
		}
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={<Avatar src={userPhoto} aria-label="avatar" />}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={title}
				subheader={`Posted by: ${creatorName}`}
			/>

			<iframe
				src={`https://clips.twitch.tv/embed?clip=${twClipId}&parent=${process.env.DOMAIN}`}
				className={classes.iframe}
				allowFullScreen={true}
			/>

			<CardActions disableSpacing>
				<IconButton aria-label="like" onClick={handleLike}>
					{isLiked ? <ThumbUp /> : <ThumbUpOutlined />}
				</IconButton>
				{likes}
				<IconButton aria-label="dislike" onClick={handleDislike}>
					{isDisliked ? <ThumbDown /> : <ThumbDownOutlined />}
				</IconButton>
				{dislikes}
				<div className={classes.rightIcons}>
					{commentsCount}
					<IconButton aria-label="comment">
						<CommentOutlined />
					</IconButton>
				</div>
			</CardActions>
		</Card>
	);
};

export default ClipCard;
