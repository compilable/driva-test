import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express'
import quotesRouter from "./routes/quotes.route"

const API_ROOT_URI = "/api/v1";
const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(express.json());

server.use(API_ROOT_URI, quotesRouter);

export default server
