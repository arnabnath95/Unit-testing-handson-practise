import Sinon from 'sinon';
import { html, fixture, expect } from '@open-wc/testing';
import '../src/dashboard/Dashboard.js';
const obj = await fixture(html`<dash-board></dash-board>`);
const obj2 = await fixture(html`<dashboard-overview></dashboard-overview>`);
const obj3 = await fixture(html`<dashboard-menu></dashboard-menu>`);

describe('dashboard', () => {
  it('checks for dahboard accessibile', async () => {
    await expect(obj).to.be.accessible;
  });

  it('checks for spy first update', async () => {
    const SpyMethod = Sinon.spy(obj, 'firstUpdated');
    obj.firstUpdated();
    expect(SpyMethod.calledOnce).to.be.true;
  });

});

describe('dashboard Overview', () => {
  it('checks for Dashboard Overview accessibile', async () => {
    await expect(obj2).to.be.accessible;
  });

  it('checks for spy first _renderdashboardcard', async () => {
    const SpyMethod = Sinon.spy(obj2, '_renderdashboardcard');
    obj2._renderdashboardcard();
    expect(SpyMethod.calledOnce).to.be.true;
  });

});

describe('dashboard menu', () => {
  it('checks for Dashboard menu accessibile', async () => {
    await expect(obj3).to.be.accessible;
  });

  it('checks for spy first _setTypeInLS', async () => {
    const SpyMethod = Sinon.spy(obj3, '_setTypeInLS');
    obj3._setTypeInLS();
    expect(SpyMethod.calledOnce).to.be.true;
  });

});