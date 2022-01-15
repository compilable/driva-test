import { PrismaClient } from '@prisma/client'
import { Request, Response, NextFunction } from 'express'
const prisma = new PrismaClient()
import { toObject } from '../utils/util_v1.0'
const { validationResult } = require('express-validator');

export async function fetchQuotes(request: Request, response: Response, next?: NextFunction) {
    console.log("INFO: recived featch all request.")
    try {
        const allQuotes = await prisma.quotes.findMany()
        //console.log('All quotes: ')
        //console.dir(allQuotes, { depth: null })
        response.status(200).json(toObject(allQuotes));

    } catch (e: any) {
        console.error(e)
        response.status(500).json({ status: 'unsucessful' });
    }
    finally {
        (async () => {
            await prisma.$disconnect();
        });
    }
}

export async function createQuote(request: Request, response: Response, next?: NextFunction) {
    console.log("INFO: recived create quote request.")
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        return response.status(400).json({
            success: false,
            errors: errors.array()
        });
    }

    console.dir(request.body)
    try {
        const newQuote = await prisma.quotes.create(
            {
                data: request.body
            })
        response.status(200).json(toObject(newQuote))

    } catch (e: any) {
        console.error(e)
        response.status(500).json({ status: 'unsucessful' });
    }
    finally {
        (async () => {
            await prisma.$disconnect();
        });
    }
}


