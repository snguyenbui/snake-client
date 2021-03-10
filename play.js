const setupInput = require('./input')
const connect = require('./client');

/**
 * Establish connection to the server
 */
console.log('Connecting ...');
connect();

setupInput();