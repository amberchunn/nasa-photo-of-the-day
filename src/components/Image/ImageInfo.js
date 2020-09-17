// Libraries
import React from 'react';
import styled from 'styled-components';

// Styles
const PhotoTitle = styled.h5`
	font-size: 1.25em;
	color: #DA3099;
	margin: 0;
`;
const Description = styled.p`
	font-size: 1em;
	line-height: 1.25em;
	color: #0f110c;
	max-width: 80%;
	text-align: justify;
`;

const ImageInfo = props => {
	return (
		<div className="photo-information">
			<PhotoTitle>{props.title}</PhotoTitle>
			<Description>{props.description}</Description>
		</div>
	);
};

export default ImageInfo;
