import React from 'react';
import Divider from '@material-ui/core/Divider';
import Comment from '../Comment';
import { CommentDivider, CommentsContainer } from './styles';

const Comments = () => {
	return (
		<CommentsContainer>
			<Comment
				photoUrl="https://avatars.githubusercontent.com/u/40203788?s=460&u=bb67357c370e74a78cb43239833649004c9212d6&v=4"
				text="Oi, tudo bem"
				username="Marco Amorim"
			/>
			<CommentDivider variant="inset" component="li" />
		</CommentsContainer>
	);
};

export default Comments;
