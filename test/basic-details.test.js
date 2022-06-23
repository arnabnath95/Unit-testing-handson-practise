import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';
const obj = await fixture(html`<basic-details></basic-details>`);
describe('Basic details', () => {
  it('checks for Accessible', async () => {
    expect(obj).to.be.accessible;
  });

  it('checks for spy to _toDashboard', () => {
    const SpyMethod = Sinon.spy(obj, '_toDashboard');
    obj._toDashboard();
    expect(SpyMethod.calledOnce).to.be.true;
  });

  it('checks for spy function _captureDetails', async () => {
    const myspy = Sinon.spy(obj, '_captureDetails');
    obj._captureDetails();
    expect(myspy.calledOnce).to.be.true;
  });
  it('checks for spy function _numToWord', async () => {
    const myspy = Sinon.spy(obj, '_numToWord');
    obj._numToWord();
    expect(myspy.calledOnce).to.be.true;
  });
});