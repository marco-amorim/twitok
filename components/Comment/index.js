import React from 'react';
import {
	Avatar,
	IconButton,
	ListItemAvatar,
	ListItemText,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import {
	CommentItem,
	CommentText,
	CommentDate,
	DeleteButtonContainer,
} from './styles';
import { Delete } from '@material-ui/icons';

const Comment = ({
	photoUrl,
	username,
	text,
	date,
	time,
	decreaseComments,
	loggedUserId,
	commentUserId,
}) => {
	const handleDelete = () => {
		alert('delete!');
	};

	return (
		<CommentItem>
			<ListItemAvatar>
				<Avatar alt="user" src={photoUrl} />
			</ListItemAvatar>
			<ListItemText
				primary={
					<>
						{username}
						<CommentDate>
							{date} - {time}
						</CommentDate>
					</>
				}
				secondary={
					<CommentText component="span" variant="body2" color="textPrimary">
						{text}
					</CommentText>
				}
			/>
			{loggedUserId && loggedUserId === commentUserId ? (
				<DeleteButtonContainer>
					<IconButton aria-label="delete" onClick={handleDelete}>
						<Delete />
					</IconButton>
				</DeleteButtonContainer>
			) : null}
		</CommentItem>
	);
};

Comment.propTypes = {
	photoUrl: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	decreaseComments: PropTypes.func.isRequired,
	loggedUserId: PropTypes.string.isRequired,
	commentUserId: PropTypes.string.isRequired,
};

export default Comment;
