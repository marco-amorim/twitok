import React, { useEffect, useState } from 'react';
import CommentInput from '../CommentInput';
import Comment from '../Comment';
import { CommentDivider, CommentsContainer } from './styles';
import PropTypes from 'prop-types';
import axios from 'axios';

const CommentsSection = ({
	loggedUser,
	clipId,
	increaseComments,
	decreaseComments,
}) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		fetchComments();
	}, []);

	const fetchComments = async () => {
		const { data } = await axios.get(`/api/clips/comments/${clipId}`);
		const { commentsList } = data;

		setComments(commentsList);
	};

	const handleSubmit = async (values, actions) => {
		try {
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
				user: loggedUser,
				time: time,
				date: date,
			};

			await axios.post('/api/clips/comments/create', {
				comment: newComment,
				clipId: clipId,
			});
		} catch (error) {
			console.log(
				'We are having trouble trying to create the comment, error: ' + error
			);
		} finally {
			actions.resetForm();
			increaseComments();
			fetchComments();
		}
	};

	const handleDelete = (commentId) => {
		try {
			axios.delete('/api/clips/comments/delete', {
				data: {
					clipId: clipId,
					commentId: commentId,
				},
			});
		} catch (error) {
			console.log(
				'We are having trouble trying to delete the comment, error: ' + error
			);
		} finally {
			setTimeout(() => {
				decreaseComments();
				fetchComments();
			}, 500);
		}
	};

	const renderComments = () => {
		return comments.map((comment, index) => {
			return (
				<React.Fragment key={index}>
					<Comment
						photoUrl={comment.user.image}
						text={comment.text}
						username={comment.user.name}
						date={comment.date}
						time={comment.time}
						loggedUserId={loggedUser ? loggedUser.id : null}
						commentUserId={comment.user.id}
						clipId={clipId}
						commentId={comment._id}
						onDelete={handleDelete}
					/>
					<CommentDivider variant="inset" component="li" />
				</React.Fragment>
			);
		});
	};

	return (
		<CommentsContainer>
			{renderComments()}
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
	increaseComments: PropTypes.func.isRequired,
	decreaseComments: PropTypes.func.isRequired,
};

export default CommentsSection;
