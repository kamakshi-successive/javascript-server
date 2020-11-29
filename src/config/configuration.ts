import { IConfig } from './IConfig';
import { config } from 'dotenv';

// import * as dotenv from 'dotenv';
// console.log(dotenv);
config();

// tslint:disable-next-line: no-var-requires
// const envVars = require ('dotenv').config();
const envVars = process.env;
// console.log('Inside config', envVars);
const configuration = Object.freeze({
  key : envVars.KEY,
  port : envVars.PORT,
  nodeEnv : envVars.NODE_ENV,
  mongoURL: envVars.MONGO_URL,
  password: envVars.PASSWORD

});

// Object.freeze(configuration);
// config.PORT=7000;
export default configuration;

// const ram = {name: 'Ram',};
