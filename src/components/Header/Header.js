// Libraries
import React from 'react';
import styled from 'styled-components';

// Styles
const Title = styled.h1`
	font-size: 2rem;
	text-align: center;
	color: #336699;
`;
const SubHeading = styled.p`
	font-size: 1rem;
	line-height: 1.5rem;
	text-align: center;
	color: #0f110c;
	max-width: 60%;
`;

function Header() {
	const pageHeading = 'Photo of the Day';
	const subHeading =
		'Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.';

	return (
		<header className="header">
			<Title>{pageHeading}</Title>
			<SubHeading>{subHeading}</SubHeading>
		</header>
	);
}

export default Header;
