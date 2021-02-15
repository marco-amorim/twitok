import styled from 'styled-components';
import { ListItem, Typography } from '@material-ui/core';

export const CommentItem = styled(ListItem)`
	width: 80%;
	align-items: flex-start;
	position: relative;
`;

export const CommentText = styled(Typography)`
	display: inline;
`;

export const CommentDate = styled.span`
	font-size: 12px;
	font-style: italic;
	position: absolute;
	right: 0px;
	top: 0px;
`;

export const DeleteButtonContainer = styled.div`
	margin-top: auto;
`;
