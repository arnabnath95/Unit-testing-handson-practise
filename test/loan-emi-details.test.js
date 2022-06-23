import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import Sinon from 'sinon';
const el = await fixture(html`<loanemi-details></loanemi-details>`);

describe('Loan EMI details', () => {
  it('checks for accessibility', async () => {
    expect(el).to.be.accessible();
  });

  it('checks for the spy method', () => {
    const spyMethod = Sinon.spy(el, '_toBasicDetails');
    el._toBasicDetails();
    expect(spyMethod.calledOnce).to.be.true;
  });

  it('checks for the spy method', () => {
    const func = Sinon.spy(el, '_toCustomer');
    el._toCustomer();
    expect(func.calledOnce).to.be.true;
  });
});