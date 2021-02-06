import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
	CommentOutlined,
	ThumbDownOutlined,
	ThumbUpOutlined,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 625,
		marginBottom: '35px',

		'@media(max-width: 767px)': {
			width: 330,
		},
	},
	iframe: {
		width: '100%',
		height: 350,

		'@media(max-width: 767px)': {
			height: 185,
		},
	},
	rightIcons: {
		marginLeft: 'auto',
		marginRight: '12px',
	},
}));

const ClipCard = ({ embedUrl, title, creatorName }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={<Avatar aria-label="avatar">A</Avatar>}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={title}
				subheader={`Created by: ${creatorName}`}
			/>

			<iframe
				src={embedUrl}
				className={classes.iframe}
				allowFullScreen={true}
			/>

			<CardActions disableSpacing>
				<IconButton aria-label="like">
					<ThumbUpOutlined />
				</IconButton>
				0
				<IconButton aria-label="dislike">
					<ThumbDownOutlined />
				</IconButton>
				0
				<div className={classes.rightIcons}>
					0
					<IconButton aria-label="comment">
						<CommentOutlined />
					</IconButton>
				</div>
			</CardActions>
		</Card>
	);
};

export default ClipCard;
