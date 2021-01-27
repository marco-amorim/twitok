import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';
import { UserMenuContainer, UserMenuImg } from './styles';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import { signOut } from 'next-auth/client';
import { useRouter } from 'next/router';

const UserMenu = ({ userPhoto }) => {
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);
	const router = useRouter();

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	}

	const navigateTo = (event, route) => {
		router.push(route);
		handleClose(event);
	};

	const navigateToSourceCode = (event) => {
		window.open('https://github.com/marco-amorim/drawhub', '_blank');
		handleClose(event);
	};

	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);

	return (
		<UserMenuContainer>
			<div>
				<Button
					ref={anchorRef}
					aria-controls={open ? 'menu-list-grow' : undefined}
					aria-haspopup="true"
					onClick={handleToggle}
					disableRipple={true}
					disableFocusRipple
					disableTouchRipple
					disableElevation
				>
					<UserMenuImg src={userPhoto} alt="" />
					{open ? <ArrowDropUp /> : <ArrowDropDown />}
				</Button>
				<Popper
					open={open}
					anchorEl={anchorRef.current}
					role={undefined}
					transition
					disablePortal
					placement="bottom"
				>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin: placement,
							}}
						>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList
										autoFocusItem={open}
										id="menu-list-grow"
										onKeyDown={handleListKeyDown}
									>
										<MenuItem
											onClick={(event) => navigateTo(event, '/newclip')}
										>
											New Clip
										</MenuItem>
										<MenuItem
											onClick={(event) => navigateTo(event, '/myclips')}
										>
											My Clips
										</MenuItem>
										<MenuItem onClick={navigateToSourceCode}>
											Source Code
										</MenuItem>
										<MenuItem onClick={signOut}>Sign Out</MenuItem>
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
		</UserMenuContainer>
	);
};

export default UserMenu;
