import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/header/Header.js';
const obj = await fixture(html`<loan-header></loan-header>`);
describe('header', () => {
  it('checks header for accessibile', async () => {
    expect(obj).to.be.accessible();
  });

  it('Spy on localeChanged', async () => {
    const myspy = Sinon.spy(obj, 'localeChanged');
    const nlBtn = await obj.shadowRoot.querySelector('button[id="en-GB"]');
    nlBtn.click();
    expect(myspy).to.have.callCount(1);
  });
});