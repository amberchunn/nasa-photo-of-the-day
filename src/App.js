// Libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import Header from './components/Header/Header';

// Styles
import './App.css';

function App() {
	const [dailyPhoto, setDailyPhoto] = useState({});

	useEffect(() => {
		axios
			.get(
				'https://api.nasa.gov/planetary/apod?api_key=whPRS6eip4SlzNN6SUeDlSoBFnpTUZlrkoiR5Uz7'
			)
			.then(response => {
				setDailyPhoto(response.data);
			})
			.catch('Error');
	}, []);

	useEffect(() => {
		console.log('response.data');
	}, [dailyPhoto]);

	return (
		<div className="App">
			<div className="appContainer">
				<Header />
			</div>
		</div>
	);
}

export default App;
// whPRS6eip4SlzNN6SUeDlSoBFnpTUZlrkoiR5Uz7;
