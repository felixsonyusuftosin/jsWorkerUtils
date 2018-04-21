/**
 * Global type defination all type definition must be made here
 */

// Generic types for objects
export interface KeyValuePair {
  [key: string]: any;
}
// Types for http setings usually headers and other request settings are set here
export interface HttpSetting {
  [Key: string]: string;
  type: string; // Might be GET, POST , PUT, PATCH, DELETE
  credentials?: any;
}
