import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch path="/" />
			</Router>
		</>
	);
}

export default App;
