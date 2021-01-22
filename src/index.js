import React from 'react';
import ReactDOM from 'react-dom';
import { MuiTheme } from './assets/styles/MuiTheme';
import { MuiThemeProvider } from '@material-ui/core';
import App from './components/App';

ReactDOM.render(
	<MuiThemeProvider theme={MuiTheme}>
		<App />
	</MuiThemeProvider>,
	document.getElementById('root')
);
