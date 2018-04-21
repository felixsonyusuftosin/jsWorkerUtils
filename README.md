# flexloaders
Helper class that improves the the loading process of multiple endpoints on multiple processes
- Primarily focuses on running multiple api request in parallel
  * On the client side  
  * This library is meant to be a node packaged module that optimize concurrent api requests and simplify as much as possible , the library should be able  integrate with other javascript projects indepent of frameworks.

# Collaborrative Guide 
- Collaborators are welcome to fork this project
- Use Webworkers to optimize request time for multiple requests 
- For web applications that requires loading multiple resources this library will help optimize calls                        
  ## Use Case 
- import the library fro conncurrent request from flexloaders 
    `import {concorrentRequests,layersSt} from 'flexloaders'`
- All requests must be labelled with a layername and a url as declared below 
    `const req = {layername: <string>, url : <string>}`
- Pass all requests to an array and call as follows
    `concorrentRequests([reqArray])`
- You can get the values of your request by subscibing to an observer which you imported above as `layerSt`
 `layersSt.subscribe((item: any) =>`
- Check for values in your stream before accessing them as follows
   * ***You must also define a means to check if values are different before passing them as observable might stream same values over repeated calls *** 
          `if (Object.keys(item).length > 0  {}` item becomes your value
- All requests uses web workers hence cutting request time by a fraction of number of cores available on the client machine

  