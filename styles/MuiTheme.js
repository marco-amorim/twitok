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
			textPrimary: {
				color: 'var(--purple-default)',
			},
		},
		MuiFormHelperText: {
			root: {
				color: 'var(--error)',
				fontFamily: 'Roboto',
			},
		},
		MuiInput: {
			underline: {
				'&:before': {
					borderBottom: '2px solid var(--light-text-base)',
				},

				'&:after': {
					borderBottom: '2px solid var(--purple-default)',
				},

				'&:hover:not(.Mui-disabled):before': {
					borderBottom: '2px solid var(--light-text-base)',
				},
			},

			formControl: {
				margin: '15px 0px',
			},
		},
		MuiFormLabel: {
			root: {
				color: 'var(--light-text-base)',
				fontSize: '1rem',
				fontFamily: 'Roboto',
				'&$focused': {
					color: 'var(--purple-default)',
				},
			},
		},
		MuiInputBase: {
			input: {
				color: 'var(--light-text-base)',
			},
		},
		MuiCardHeader: {
			title: {
				fontSize: '16px',
			},
		},
	},
});
