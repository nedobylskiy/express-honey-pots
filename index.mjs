import express from 'express';
import nextjsStaticFilesHoneypot from './honeyPots/nextjsStaticFiles/honeypot.mjs'

export default function( options = {}) {

    const router = express.Router();


    nextjsStaticFilesHoneypot(router, options);


    return router;
}
