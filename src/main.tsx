/** @jsx jsx */
import React from 'react';
import { jsx, css, Global } from '@emotion/react';
import Hello from './components/hello';

const fonts = css`
	@font-face {
		font-family: 'Roboto';
		src: url('fonts/Roboto-Regular.ttf') format('ttf');
	}
`;

const style = css`
	${fonts}
	body {
		font-family: 'Roboto';
		margin: 0;
	}
`;

const Main: React.FC = () => (
	<div css={style}>
		<Global styles={style} />
		<Hello />
	</div>
);

export default Main;
