import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
				console.log(response.data);
			})
			.catch('Error');
	}, []);

	return (
		<div className="App">
			<p></p>
		</div>
	);
}

export default App;
// whPRS6eip4SlzNN6SUeDlSoBFnpTUZlrkoiR5Uz7;
