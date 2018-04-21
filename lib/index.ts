/**
 * @file Define entry points to various worker processes required in the application
 */
// local imports
import { KeyValuePair } from '../types';
import * as ApiWebWorker from 'file-loader?name=[name].js!./web-workers/apiwebworker';
// thirdParty imports
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
export let layersSt: Observable<{}> = new Observable();
// Define a global references here
let webWorkerInstances = {};
export let layerStream: BehaviorSubject<{}> = new BehaviorSubject({});

export interface RequestTypes {
  url: string;
  layername: string;
}
/**
 * @function defines a function that recieves variables and settings and calls the appropriate
 * end point, works for all HTTP requests only works with get request with url auth
 * @param {req:RequestTypes} the url and layer to call
 * @return observer
 */
const callEndPoints = (req: RequestTypes) => {
  const { layername, url } = req;
  webWorkerInstances[layername] = new Worker(ApiWebWorker);
  webWorkerInstances[layername].postMessage(url);
  webWorkerInstances[layername].addEventListener('message', (payload: any) => {
    const returnObj: KeyValuePair = { layername, data: payload.data };
    layerStream.next(returnObj);
  });
};
/**
 * @function handles request for multiple endpoints and exposes them as streams of observable objects
 * when the data is avaliable
 * @param {RequestTypes[]} reqArray - array of objects containing url and layername
 */
export const concorrentRequests = (reqArray: RequestTypes[]) => {
  reqArray.forEach(req => {
    callEndPoints(req);
  });
};
