import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {
	CommentOutlined,
	Comment,
	Delete,
	ThumbDown,
	ThumbDownOutlined,
	ThumbUp,
	ThumbUpOutlined,
} from '@material-ui/icons';
import axios from 'axios';
import ConfirmModal from '../ConfirmModal';
import { CardContent, Collapse } from '@material-ui/core';
import PropTypes from 'prop-types';
import CommentsSection from '../CommentsSection';

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
			height: 220,
		},
	},
	rightIcons: {
		marginLeft: 'auto',
		marginRight: '12px',
	},
}));

const ClipCard = ({
	twClipId,
	mongoClipId,
	title,
	creatorName,
	userPhoto,
	commentsCount,
	likesCount,
	dislikesCount,
	currentUser,
	likedBy,
	dislikedBy,
	editMode,
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
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showComments, setShowComments] = useState(false);

	const handleLike = async () => {
		if (currentUser) {
			try {
				await axios.put('/api/clips/vote/like', {
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
				await axios.put('/api/clips/vote/dislike', {
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

	const handleDelete = async () => {
		await axios.post('/api/clips/delete', {
			clipId: mongoClipId,
		});

		window.location.reload();
	};

	return (
		<>
			{showDeleteModal && (
				<ConfirmModal
					onConfirm={handleDelete}
					onDismiss={() => setShowDeleteModal(false)}
					isOpen={showDeleteModal}
					title="Delete Clip"
					description="Are you sure you want to delete this Clip?"
				/>
			)}

			<Card className={classes.root}>
				<CardHeader
					avatar={<Avatar src={userPhoto} aria-label="avatar" />}
					action={
						editMode && (
							<IconButton
								aria-label="delete"
								onClick={() => setShowDeleteModal(true)}
							>
								<Delete />
							</IconButton>
						)
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
						<IconButton
							aria-label="comment"
							onClick={() => setShowComments(!showComments)}
						>
							{showComments ? <Comment /> : <CommentOutlined />}
						</IconButton>
					</div>
				</CardActions>
				<Collapse in={showComments} timeout="auto" unmountOnExit>
					<CardContent>
						<CommentsSection loggedUser={currentUser} clipId={mongoClipId} />
					</CardContent>
				</Collapse>
			</Card>
		</>
	);
};

ClipCard.propTypes = {
	twClipId: PropTypes.string.isRequired,
	mongoClipId: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	creatorName: PropTypes.string.isRequired,
	userPhoto: PropTypes.string.isRequired,
	commentsCount: PropTypes.number.isRequired,
	likesCount: PropTypes.number.isRequired,
	dislikesCount: PropTypes.number.isRequired,
	currentUser: PropTypes.shape({
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
	}),
	likedBy: PropTypes.arrayOf(PropTypes.string).isRequired,
	dislikedBy: PropTypes.arrayOf(PropTypes.string).isRequired,
	editMode: PropTypes.bool.isRequired,
};

export default ClipCard;
