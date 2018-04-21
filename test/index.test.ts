/**
 * @file Define tests for module
 * using Mocha, Chai
 */
// third party imports
import { expect } from 'chai';
import 'mocha';
// local imports
import { URLARRAY } from '../constants/test-constants';
import {
  compareDates,
  measureStartTime,
  callEndPoint
} from '../utils/index';
describe('Test compare Dates ', () => {
  it('should return false meaning dates are not equal', () => {
    const date1 = new Date(2012, 0, 1);
    const date2 = new Date(2013, 0, 1);
    const date3 = new Date(2014, 1, 1);
    const value = compareDates([date1, date2, date3]);
    expect(value).to.equal(false);
  });
  it('should return true, meaning dates are equal ', () => {
    const date1 = new Date();
    const value2 = compareDates([date1, date1, date1]);
    expect(value2).to.equal(true);
  });
});
describe('Web worker action', () => {
  it('should return true if all requests are called at the same time', () => {
    const equalStartTime = URLARRAY.every(measureStartTime);
    expect(equalStartTime).to.equal(true);
  });
});
describe('Api request must return as expected', () => {
  it('should return true if all api requests are called at the same time', () => {
    const urlCalls = URLARRAY.every(callEndPoint);
    expect(urlCalls).to.equal(true);
  });
});
