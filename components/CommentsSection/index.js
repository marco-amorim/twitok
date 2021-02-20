import React, { useEffect, useState } from 'react';
import CommentInput from '../CommentInput';
import Comment from '../Comment';
import { CommentDivider, CommentsContainer } from './styles';
import PropTypes from 'prop-types';
import axios from 'axios';
import ConfirmModal from '../ConfirmModal';

const CommentsSection = ({
	loggedUser,
	clipId,
	increaseComments,
	decreaseComments,
}) => {
	const [comments, setComments] = useState([]);
	const [isDeleteEnabled, setIsDeleteEnabled] = useState(true);
	const [isInputEnabled, setIsInputEnabled] = useState(true);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [commentId, setCommentId] = useState('');

	useEffect(() => {
		fetchComments();
	}, []);

	const fetchComments = async () => {
		const { data } = await axios.get(`/api/clips/comments/${clipId}`);
		const { commentsList } = data;

		setComments(commentsList);
	};

	const handleSubmit = async (values, actions) => {
		if (isInputEnabled) {
			setIsInputEnabled(false);
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

				setTimeout(() => {
					setIsInputEnabled(true);
				}, 1000);
			}
		}
	};

	const showDeleteModalAndGetCommentId = (commentId) => {
		setCommentId(commentId);
		setShowDeleteModal(true);
	};

	const handleDelete = (commentId) => {
		if (isDeleteEnabled) {
			setIsDeleteEnabled(false);
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
				}, 750);

				setTimeout(() => {
					setIsDeleteEnabled(true);
				}, 2000);

				setShowDeleteModal(false);
			}
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
						onDelete={showDeleteModalAndGetCommentId}
					/>
					<CommentDivider variant="inset" component="li" />
				</React.Fragment>
			);
		});
	};

	return (
		<>
			{showDeleteModal && (
				<ConfirmModal
					onConfirm={() => handleDelete(commentId)}
					onDismiss={() => setShowDeleteModal(false)}
					isOpen={showDeleteModal}
					title="Delete Comment"
					description="Are you sure you want to delete this Comment?"
				/>
			)}

			<CommentsContainer>
				{renderComments()}
				{loggedUser && <CommentInput onSubmit={handleSubmit} />}
			</CommentsContainer>
		</>
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
