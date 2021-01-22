import { createMuiTheme } from '@material-ui/core';

export const MuiTheme = createMuiTheme({
	overrides: {
		MuiTab: {
			textColorPrimary: {
				color: 'var(--light-text-base)',
				'&$selected': {
					color: 'var(--light-a-hover)',
				},
			},
		},
		PrivateTabIndicator: {
			colorPrimary: {
				backgroundColor: 'var(--light-a-hover)',
			},
		},
	},
});
