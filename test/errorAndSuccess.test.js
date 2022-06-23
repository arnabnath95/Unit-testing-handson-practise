import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';
const obj = await fixture(html`<loan-success></loan-success>`);
const obj2 = await fixture(html`<loan-error></loan-error>`);

describe('Success', () => {
  it('Check for Accessible', async () => {
    expect(obj).to.be.accessible();
  });

  it('Spy on _toHome ', async () => {
    const mySpyMethod = Sinon.spy(obj, '_toHome');
    obj._toHome();
    expect(mySpyMethod.calledOnce).to.be.true;
  });
});

describe('Error', () => {
  it('Checks for Accessible', async () => {
    expect(obj2).to.be.accessible();
  });
  it('Spy on _toHome', async () => {
    const obj2 = await fixture(html`<loan-error></loan-error>`);
    const spyMethod = Sinon.spy(obj2, '_toHome');
    obj2._toHome();
    expect(spyMethod.calledOnce).to.be.true;
  });
});