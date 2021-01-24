import React from 'react';
import Header from '../components/Header';
import GlobalStyle from '../assets/styles/GlobalStyle';
import Head from 'next/head';
import { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { MuiTheme } from '../assets/styles/MuiTheme';

function App({ Component, pageProps }) {
	useEffect(() => {
		// Remove the server-side injected CSS
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<React.Fragment>
			<Head>
				<title>Twitok</title>
			</Head>
			<GlobalStyle />
			<ThemeProvider theme={MuiTheme}>
				<Header />
				<Component {...pageProps} />
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;