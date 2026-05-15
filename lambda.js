// lambda.js — Lambda entrypoint. Wraps the existing Express app for API Gateway.
// app.js stays 100 % framework-pure; this file is the only Lambda-aware code.

const serverless = require('serverless-http');
const app = require('./app');

module.exports.handler = serverless(app);
