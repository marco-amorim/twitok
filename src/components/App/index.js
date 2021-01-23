import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import Routes from '../../routes';
import { initializeFirebase } from '../../services/firebase';
import Header from '../Header';

initializeFirebase();

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
