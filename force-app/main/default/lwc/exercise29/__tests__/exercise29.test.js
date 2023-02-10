import { createElement } from 'lwc';
import Exercise29 from 'c/exercise29';
import { registerLdsTestWireAdapter } from '@salesforce/wire-service-jest-util';
import { getRecord } from 'lightning/uiRecordApi';

// Import mock data to send through the wire adapter.
const mockGetRecord = require('./data/getRecord.json');

describe('c/exercise29', () => {
	// Register a test wire adapter.
	const getRecordWireAdapter = registerLdsTestWireAdapter(getRecord);

	// Disconnect the component to reset the adapter. It is also
	// a best practice to clean up after each test.
	afterEach(() => {
		while (document.body.firstChild) {
			document.body.removeChild(document.body.firstChild);
		}
	});

	it('displays data returned by wire service', () => {
		// GIVEN
		const cmpElement = createElement('c-exercise29', { is: Exercise29 });
		document.body.appendChild(cmpElement);

		// WHEN
		getRecordWireAdapter.emit(mockGetRecord);

		// THEN
		// Resolve a promise to wait for a rerender of the new content.
		return Promise.resolve().then(() => {
			const content = cmpElement.shadowRoot.querySelector('span');
			expect(content.textContent).toBe("Test account");
		});
	});
});