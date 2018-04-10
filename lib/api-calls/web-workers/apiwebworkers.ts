/**
 * @file defines an event listener for webworker spawning a different process
 * this only calls the fetch library to load from a url passed to the worker
 * and returns the response
 * the file is being loaded by an helper file `file-loader.d.ts`
 */
addEventListener('message', e => {
    fetch(e.data).then(data => {
      try {
        data.json().then(retData => {
          postMessage(retData);
        });
      } catch (err) {
        postMessage(err);
      }
    });
  });
  