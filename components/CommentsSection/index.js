import React from 'react';
import CommentInput from '../CommentInput';
import Comment from '../Comment';
import { CommentDivider, CommentsContainer } from './styles';
import PropTypes from 'prop-types';

const CommentsSection = ({ loggedUser }) => {
	const handleSubmit = (values) => {
		const newDate = new Date();

		const currentHour = newDate.getHours();
		const currentMinute = newDate.getMinutes();

		const hours =
			((currentHour + 11) % 12) + 1 < 10 ? '0' + currentHour : currentHour;
		const minutes = currentMinute < 10 ? '0' + currentMinute : currentMinute;

		const time = hours + ':' + minutes;
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

		alert(JSON.stringify(newComment));
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
};

export default CommentsSection;
