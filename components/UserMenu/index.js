import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { UserMenuContainer, UserMenuImg } from './styles';
import { ArrowDropDown } from '@material-ui/icons';
import { signOut } from 'next-auth/client';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const UserMenu = ({ userPhoto }) => {
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

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
		window.location.href = route;
		handleClose(event);
	};

	const navigateToSourceCode = (event) => {
		window.open('https://github.com/marco-amorim/twitok', '_blank');
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
			<Button
				ref={anchorRef}
				aria-controls={open ? 'menu-list-grow' : undefined}
				aria-haspopup="true"
				onClick={handleToggle}
				disableRipple
				disableFocusRipple
				disableTouchRipple
			>
				<ArrowDropDown />
				<UserMenuImg src={userPhoto} alt="photo" />
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
										onClick={(event) => navigateTo(event, '/shareclip')}
									>
										Share Clip
									</MenuItem>
									<MenuItem onClick={(event) => navigateTo(event, '/myclips')}>
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
		</UserMenuContainer>
	);
};

UserMenu.propTypes = {
	userPhoto: PropTypes.string.isRequired,
};

export default UserMenu;
