//Libraries
import React, { useState } from 'react';

// Styles
import './Image.less';

const Image = props => {
	// {
	// 	console.log(props);
	// }
	return (
		<div>
			<p className="date">{props.date}</p>
			<div className="photo">
				<img src={props.photoUrl} alt={props.title} />
			</div>
			<p className="photo-credit">{props.credit}</p>
		</div>
	);
};

export default Image;
