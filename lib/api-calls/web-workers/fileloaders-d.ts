/**
 * @file loader  that allows web workers to be imported as modules
 * to use this file just import the module name and extend the * portion with name of the file 
 */
declare module 'file-loader?name=[name].js!*' {
    const value: string;
    export = value;
  }