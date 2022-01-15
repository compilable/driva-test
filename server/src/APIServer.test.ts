import { agent as request } from "supertest";
import { Request, Response, NextFunction } from 'express'

import { APIServerConfig } from "./models/APIServerConfig"
const config: APIServerConfig = { port: 8080 }
import APIServer from "./APIServer"
import {Quote} from "./models/Quote"

const API_PATH = "/api/v1/"

describe('app xxx', () => {

    it('GET /quotes -> array of quotes', async () => {
        await request(APIServer).get(`${API_PATH}quotes`).
            expect('Content-Type', /json/)
            .expect(200)
            .then((response: any) => {
                expect(response.body).toBeInstanceOf(Array)
            })
    })


    it('POST /quotes -> create quote', async () => {

        const newQuote:Quote = {
            "uuid": "UUID_20",
            "status": true,
            "mobile": "0425252522",
            "email": "TEST@test.com",
            "quote_data": {
                key1: "val3",
                key2: "val4"
            },
            "created_at": new Date()
        }
        await request(APIServer)
            .post( `${API_PATH}quotes` )
            .send(newQuote)
            .expect(200)
            .then(async (response) => {
                expect( parseInt(response.body.quote_id)).toBeGreaterThan(0)
                expect(response.body.uuid).toBe(newQuote.uuid)
            })
    })


    it('POST /quotes -> validate quote request', () => {

    })

    it('POST /quotes -> validate quote : XXXX if faild', () => {

    })


    it('POST /quotes -> validate quote : 200 if faild', () => {

    })


})

