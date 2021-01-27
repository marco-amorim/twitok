import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Comment } from '@material-ui/icons';

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
}));

const ClipCard = ({ embedUrl }) => {
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
				title="Shrimp and Chorizo Paella"
				subheader="September 14, 2016"
			/>

			<iframe
				src={embedUrl}
				className={classes.iframe}
				allowFullScreen={true}
			/>

			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="comment">
					<Comment />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default ClipCard;
