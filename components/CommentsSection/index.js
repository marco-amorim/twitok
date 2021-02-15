import React from 'react';
import CommentInput from '../CommentInput';
import Comment from '../Comment';
import { CommentDivider, CommentsContainer } from './styles';
import PropTypes from 'prop-types';
import axios from 'axios';

const CommentsSection = ({ loggedUser, clipId }) => {
	const handleSubmit = (values, actions) => {
		const newDate = new Date();

		const hours = newDate.getHours();
		const minutes = newDate.getMinutes();

		const formatedHours = hours < 10 ? '0' + hours : hours;
		const formatedMinutes = minutes < 10 ? '0' + minutes : minutes;

		const time = formatedHours + ':' + formatedMinutes;

		const date =
			newDate.getDate() +
			'/' +
			(newDate.getMonth() + 1) +
			'/' +
			newDate.getFullYear();

		const newComment = {
			...values,
			userId: loggedUser.id,
			time: time,
			date: date,
		};

		axios.post('/api/clips/comments/create', {
			comment: newComment,
			clipId: clipId,
		});

		actions.resetForm();
	};

	return (
		<CommentsContainer>
			<Comment
				photoUrl="https://avatars.githubusercontent.com/u/40203788?s=460&u=bb67357c370e74a78cb43239833649004c9212d6&v=4"
				text="Oi, tudo bem"
				username="Marco Amorim"
				date="20/02/2020"
				time="21:03"
			/>
			<CommentDivider variant="inset" component="li" />
			{loggedUser && <CommentInput onSubmit={handleSubmit} />}
		</CommentsContainer>
	);
};

CommentsSection.propTypes = {
	loggedUser: PropTypes.shape({
		email: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	}),
	clipId: PropTypes.string.isRequired,
};

export default CommentsSection;
