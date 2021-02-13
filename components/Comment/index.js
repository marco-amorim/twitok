import React from 'react';
import {
	ListItem,
	Avatar,
	ListItemAvatar,
	ListItemText,
	Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { CommentItem, CommentText } from './styles';

const Comment = ({ photoUrl, username, text }) => {
	return (
		<CommentItem>
			<ListItemAvatar>
				<Avatar alt="Remy Sharp" src={photoUrl} />
			</ListItemAvatar>
			<ListItemText
				primary={username}
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
};

export default Comment;
