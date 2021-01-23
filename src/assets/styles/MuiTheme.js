import { createMuiTheme } from '@material-ui/core';

export const MuiTheme = createMuiTheme({
	overrides: {
		MuiTab: {
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
	},
});
