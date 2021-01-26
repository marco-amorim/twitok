import { createMuiTheme } from '@material-ui/core';

export const MuiTheme = createMuiTheme({
	overrides: {
		MuiTab: {
			root: {
				fontWeight: 'bold',
				margin: '0px 15px',
				textTransform: 'none',
			},

			textColorPrimary: {
				color: 'var(--light-text-base)',
				'&$selected': {
					color: 'var(--purple-default)',
				},
			},
		},
		PrivateTabIndicator: {
			colorPrimary: {
				backgroundColor: 'var(--purple-default)',
			},
		},

		MuiButton: {
			root: {
				'&:hover': {
					backgroundColor: 'none',
				},
			},
		},
	},
});
