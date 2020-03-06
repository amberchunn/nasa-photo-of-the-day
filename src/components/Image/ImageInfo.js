// Libraries
import React from 'react';

// Styles
import './Image.less';

const ImageInfo = props => {
	return (
		<div className="photo-information">
			<h5 className="photo-title">{props.title}</h5>
			<p className="description">{props.description}</p>
		</div>
	);
};

export default ImageInfo;
