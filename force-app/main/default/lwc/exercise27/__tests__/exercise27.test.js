import { createElement } from 'lwc';
import Exercise27 from 'c/exercise27';
import { registerApexTestWireAdapter } from '@salesforce/wire-service-jest-util';
import getAccounts from "@salesforce/apex/Exercise27Controller.getAccounts";

// Realistic data with a list of contacts
const mockGetAccountList = require('./data/getRecords.json');

// Register as Apex wire adapter. Some tests verify that provisioned values trigger desired behavior.
const getAccountsAdapter = registerApexTestWireAdapter(getAccounts);


describe('c/exercise27', () => {

	// Disconnect the component to reset the adapter. It is also
	// a best practice to clean up after each test.
	afterEach(() => {
		while (document.body.firstChild) {
			document.body.removeChild(document.body.firstChild);
		}

        // Prevent data saved on mocks from leaking between tests
        jest.clearAllMocks();
	});

	it('displays data returned by wire service', () => {
		// GIVEN
		const cmpElement = createElement('c-exercise27', { is: Exercise27 });
		document.body.appendChild(cmpElement);

		// WHEN
		getAccountsAdapter.emit(mockGetAccountList);

		// THEN
		// Resolve a promise to wait for a rerender of the new content.
        return Promise.resolve().then(() => {
            // Select elements for validation
            const detailEls = cmpElement.shadowRoot.querySelectorAll('p');
            expect(detailEls.length).toBe(mockGetAccountList.length);
            expect(detailEls[0].textContent).toBe(
                mockGetAccountList[0].Name
            );
        });
	});
});