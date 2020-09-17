//Libraries
import React from 'react';
import styled from 'styled-components';

// Styles
const Date = styled.p`
	font-size: 1em;
	color: #0f3056;
	font-weight: 700;
`;
const Credit = styled.p`
	font-size: 1.25em;
	color: #0f3056;
`;
const DailyPhoto = styled.img`
	border: 5px solid #333;
`;
const Image = props => {
	return (
		<div>
			<Date>{props.date}</Date>
			<div className="photo">
				<DailyPhoto src={props.photoUrl} alt={props.title}></DailyPhoto>
			</div>
			<Credit>{props.credit}</Credit>
		</div>
	);
};

export default Image;
