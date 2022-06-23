import { html, fixture, expect } from '@open-wc/testing';
import '../loan-application.js';
const  obj = await fixture(html`<loan-application></loan-application>`);;

describe('LoanApplication', () => {
  it('checks for accessibility', async () => {
    expect(obj).to.be.accessible();
  });
});