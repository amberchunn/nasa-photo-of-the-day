import React from 'react';
import './Header.less';

function Header() {
	const pageHeading = 'Photo of the Day';
	const subHeading =
		'Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.';

	return (
		<header className="header">
			<h1 className="page-heading">{pageHeading}</h1>
			<p className="sub-heading">{subHeading}</p>
		</header>
	);
}

export default Header;
