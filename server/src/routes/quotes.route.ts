import { Router } from "express";
import { fetchQuotes, createQuote } from "../controllers/quotes.controller";

const router = Router();

router.get('/quotes', fetchQuotes)
router.post('/quotes', createQuote)

export default router;