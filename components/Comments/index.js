import React from 'react';
import CommentInput from '../CommentInput';
import Comment from '../Comment';
import { CommentDivider, CommentsContainer } from './styles';
import PropTypes from 'prop-types';

const Comments = ({ loggedUser }) => {
	const handleSubmit = (values) => {
		const newComment = { ...values, userId: loggedUser.id };

		alert(JSON.stringify(newComment));
	};

	return (
		<CommentsContainer>
			<Comment
				photoUrl="https://avatars.githubusercontent.com/u/40203788?s=460&u=bb67357c370e74a78cb43239833649004c9212d6&v=4"
				text="Oi, tudo bem"
				username="Marco Amorim"
				createdAt="20/02/2020"
			/>
			<CommentDivider variant="inset" component="li" />
			{loggedUser && <CommentInput onSubmit={handleSubmit} />}
		</CommentsContainer>
	);
};

Comments.propTypes = {
	loggedUser: PropTypes.shape({
		email: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	}),
};

export default Comments;
