import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Home from './Home';

let container = null;
beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it('should render', async () => {

	jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({json: () => Promise.resolve('ggg') }) )

	await act( async () => {
		render(<Home />, container)
	});

	expect(container.querySelector('h2').textContent).toEqual('Home ggg');

});