import React from 'react';
import { Avatar, ListItemAvatar, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';
import { CommentItem, CommentText, CommentDate } from './styles';

const Comment = ({ photoUrl, username, text, date, time }) => {
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
		</CommentItem>
	);
};

Comment.propTypes = {
	photoUrl: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
};

export default Comment;
