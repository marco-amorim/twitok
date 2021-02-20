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
	loggedUserId,
	commentUserId,
	commentId,
	onDelete,
}) => {
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
					<IconButton aria-label="delete" onClick={() => onDelete(commentId)}>
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
	loggedUserId: PropTypes.string,
	commentUserId: PropTypes.string.isRequired,
	commentId: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default Comment;
