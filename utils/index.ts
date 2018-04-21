/**
 * @file defines util files for the module
 */
// thirdParty imports
import axios from 'axios';
// local imports
// import * as APIWORKER from 'file-loader?name=[name].js!../lib/api-calls/web-workers/apiwebworkers';
// Global Variables
let globalStartTime: Date;
declare var Promise: any;
/*********************************************|
 ************ util  Functions************|
 *********************************************/
/**
 * @function returns the current time
 * used to check time of exection and check if functions
 * are running in parallel
 */
export const returnCurrentTime = () => {
  return new Date();
};
/**
 * @function compares multiple date objects and returns
 * its equality state
 * @param {Date[]} dates - Array of dates to compare
 * @return { boolean } returns true if all dates are equal otherwise returns false
 */
export const compareDates = (dates: Date[]): boolean => {
  const firstDate = dates[0];
  let returnValue = true;
  for (let i: number = 0; i < dates.length; i++) {
    if (dates[i].getTime() !== firstDate.getTime()) {
      returnValue = false;
      break;
    }
  }
  return returnValue;
};
/**
 * @function measures start time of functions running on an array
 * @return { boolean } return true if all is executed at the same time
 * @return {boolean}
 *
 *
 */
export const measureStartTime = (): boolean => {
  if (!globalStartTime) {
    globalStartTime = new Date();
  }
  const startTime = new Date();
  if (startTime.getTime() !== globalStartTime.getTime()) {
    return false;
  } else {
    return true;
  }
};
/**
 * calls an api http end point wit a GET request
 * @param {string} - url - http endpoint to call
 * @return {Promise} that resolves status
 */
export const callEndPoint = (url: string) => {
  return new Promise((resolve: any, reject: any) => {
    axios(url)
      .then((response: any) => {
        const status: number = response.status;
        resolve(status === 200);
      })
      .catch(() => {
        reject(500);
      });
  });
};
