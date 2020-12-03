import { IConfig } from './IConfig';
import { config } from 'dotenv';

config();
const envVars = process.env;
const configuration = Object.freeze({
  key : envVars.KEY,
  port : envVars.PORT,
  nodeEnv : envVars.NODE_ENV,
  mongoURL: envVars.MONGO_URL,
  password: envVars.PASSWORD

});

export default configuration;
