import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Home } from '@material-ui/icons/';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { TabButton } from './styles';

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

export default function TabMenu() {
	const classes = useStyles();
	const router = useRouter();
	const [value, setValue] = useState(router.pathname);

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
						<Link href="/timeline">
							<TabButton
								className={`${
									value === '/timeline' && classes.linkSelectedColor
								}`}
							>
								Timeline
							</TabButton>
						</Link>
					}
					disableRipple
					value="/timeline"
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
}
