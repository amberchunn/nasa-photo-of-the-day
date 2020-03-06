// Libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import Header from './components/Header/Header';
import Image from './components/Image/Image';
import ImageInfo from './components/Image/ImageInfo';

// Styles
import './App.css';

const App = props => {
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
		// console.log(dailyPhoto);
	}, [dailyPhoto]);

	return (
		<div className="App">
			<div className="appContainer">
				{/* {console.log(dailyPhoto)} */}
				<Header />
				<Image
					date={dailyPhoto.date}
					photoUrl={dailyPhoto.url}
					credit={dailyPhoto.copyright}
				/>
				<ImageInfo title={dailyPhoto.title} description={dailyPhoto.explanation} />
			</div>
		</div>
	);
};

export default App;
