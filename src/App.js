import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './containers/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import './App.scss';

const App = () => {
	return (
		<div className='app'>
			<Router>
				<Navbar />
				<Home />
				<Footer />
			</Router>
		</div>
	);
};

export default App;
