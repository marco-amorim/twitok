import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import Routes from '../../routes';
import Header from '../Header';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Header />
			<Routes />
		</BrowserRouter>
	);
};

export default App;
