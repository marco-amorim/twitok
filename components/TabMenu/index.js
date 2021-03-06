import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { TabButton } from './styles';
import { Home } from '@material-ui/icons';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		maxWidth: 'fit-content',
		display: 'flex',
		justifyContent: 'space-between',
	},

	linkSelectedColor: {
		color: 'var(--purple-default)',
	},
});

const TabMenu = () => {
	const classes = useStyles();
	const router = useRouter();
	const pathname = router.pathname;
	const possibleValues = ['/', '/newclips', '/topclips'];
	const [value, setValue] = useState(
		possibleValues.includes(pathname) ? pathname : false
	);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Paper>
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				centered
			>
				<Tab
					label={
						<Link href="/">
							<TabButton
								className={`${value === '/' && classes.linkSelectedColor}`}
							>
								<Home />
							</TabButton>
						</Link>
					}
					disableRipple
					value="/"
				/>
				<Tab
					label={
						<Link href="/newclips">
							<TabButton
								className={`${
									value === '/newclips' && classes.linkSelectedColor
								}`}
							>
								New Clips
							</TabButton>
						</Link>
					}
					disableRipple
					value="/newclips"
				/>
				<Tab
					label={
						<Link href="/topclips">
							<TabButton
								className={`${
									value === '/topclips' && classes.linkSelectedColor
								}`}
							>
								Top Clips
							</TabButton>
						</Link>
					}
					disableRipple
					value="/topclips"
				/>
			</Tabs>
		</Paper>
	);
};

export default TabMenu;
