import React from 'react';
import styled, { css } from 'styled-components';

const Logo = styled.div`
	font-size: 1.5em;
`;

const Bar = styled.div`
	display: grid;
	margin-bottom: 40px;
	grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div`
	${props =>
		props.active &&
		css`
			text-shadow: 0px 0px 60px #03ff03;
		`}
	cursor: pointer;
`;

function toProperCase(lower) {
	return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({ name, active }) {
	return (
		<ControlButtonElem active={active}>{toProperCase(name)}</ControlButtonElem>
	);
}

const AppBar = () => {
	return (
		<Bar>
			<Logo>CryptoDash</Logo>
			<div />
			<ControlButton active name='dashboard' />
			<ControlButton name='settings' />
		</Bar>
	);
};

export default AppBar;
