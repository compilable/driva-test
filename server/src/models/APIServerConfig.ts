import {WriteStream} from 'fs';

export type APIServerConfig = {
  port: number;
  logger?: WriteStream;
};
