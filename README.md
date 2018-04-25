# flexloaders
### DISCLAIMER: This library is a work in progress and its not ready for production
- The whole paradigm of JavaScript is based on the idea of single-threaded environment but here come Web Workers which remove (partially) this limitation.Web Workers allow developers to put long-running and computationally intensive tasks on the background. This library simplifies the implementation of webworker for mutithreaded processes.
- To use this library at this stage in your existing apps you might need to tweak some parts of the library
- Improves the the loading process of endpoints on multiple processes
- Runs multiple processes in parallel.
- Uses webworkers and targets es6, es2015, es5, Typescript
- Primarily focuses on running multiple api request in parallel
  * On the client side  
  * This library is meant to be a node packaged module that optimize concurrent api requests and simplify as much as possible , the library should be able  integrate with other javascript projects indepent of frameworks.

# Collaborrative Guide 
- Collaborators are welcome to fork this project please read the DevelopersREADME.md form guides
- Use Webworkers to optimize request time for multiple requests 
- For web applications that requires loading multiple resources this library will help optimize calls                        
  ## Use Case 
- import the library from conncurrent request from flexloaders 



```
    import { concurrentRequests,layersSt} from 'flexloaders'
    concurrentRequest(< array of values >)
```
or common js 
```
    const concurrentRequests = require('flexloaders');
    const layersSt = require('flexloaders');
 ```
- All requests must be labelled with a layername and a url as declared below 



    ```const req = {layername: <string>, url : <string>}```



- Pass all requests to an array and call as follows



    ``` concurrentRequests([reqArray])```



- You can get the values of your request by subscibing to an observer which you imported above as 
 ```
    layerSt
    layersSt.subscribe((item: any) =>
```


- Check for values in your stream before accessing them as follows
   * You must also define a means to check if values are different before passing them as observable might stream same values over repeated calls 
    ```
        if (Object.keys(item).length > 0  {
             item becomes your return value 
        }
    ``` 
       
- All requests uses web workers hence cutting request time by a fraction of number of cores available on the client machine

  