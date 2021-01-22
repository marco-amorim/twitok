import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { Home } from '@material-ui/icons/';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		maxWidth: 'fit-content',
		display: 'flex',
		justifyContent: 'space-between',
	},

	tab: {
		textTransform: 'none',
		position: 'relative',
		margin: '0px 15px',
	},

	link: {
		position: 'absolute',
		top: '0px',
		bottom: '0px',
		left: '0px',
		right: '0px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},

	linkSelectedColor: {
		color: 'var(--light-a-hover)',
	},
});

export default function TabMenu() {
	const classes = useStyles();
	const [value, setValue] = React.useState(window.location.pathname);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Paper className={classes.root}>
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				centered
			>
				<Tab
					label={
						<Link
							to="/"
							className={`${classes.link} ${
								value === '/' && classes.linkSelectedColor
							}`}
						>
							<Home />
						</Link>
					}
					className={classes.tab}
					disableRipple
					value="/"
				/>
				<Tab
					label={
						<Link
							to="/timeline"
							className={`${classes.link} ${
								value === '/timeline' && classes.linkSelectedColor
							}`}
						>
							Timeline
						</Link>
					}
					className={classes.tab}
					disableRipple
					value="/timeline"
				/>
				<Tab
					label={
						<Link
							to="/topclips"
							className={`${classes.link} ${
								value === '/topclips' && classes.linkSelectedColor
							}`}
						>
							Top Clips
						</Link>
					}
					className={classes.tab}
					disableRipple
					value="/topclips"
				/>
			</Tabs>
		</Paper>
	);
}
