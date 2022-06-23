import { html, fixture, expect } from '@open-wc/testing';
import '../src/Customer/Customer-details.js';
import Sinon from 'sinon';
const obj = await fixture(html`<customer-details></customer-details>`);

describe('customer details', () => {
  it('checks for Accessible', async () => {
    expect(obj).to.be.accessible;
  });

  it('checks for spy to _toEmidetails', () => {
    const SpyMethod = Sinon.spy(obj, '_toEmidetails');
    obj._toEmidetails();
    expect(SpyMethod.calledOnce).to.be.true;
  });

});