import express from 'express';
import nextjsStaticFilesHoneypot from './honeyPots/nextjsStaticFiles/honeypot.mjs'
import nowItsPHP from './honeyPots/nowItsPHP/honeypot.mjs'
import oldApache from './honeyPots/oldApache/honeypot.mjs'
import directoryListing from './honeyPots/directoryListing/honeypot.mjs'
import phpShell from './honeyPots/phpShell/honeypot.mjs'

export default function( options = {
    nextjsStaticFilesHoneypot: true,
    nowItsPHP: true,
    directoryListing: true,
    phpShell: true,
    oldApache: true
}) {

    const router = express.Router();


    if(typeof options.nextjsStaticFilesHoneypot === 'undefined' || options.nextjsStaticFilesHoneypot === true) {
        nextjsStaticFilesHoneypot(router, options);
    }

    if(typeof options.nowItsPHP === 'undefined' || options.nowItsPHP === true) {
        nowItsPHP(router, options);
    }

    if(typeof options.oldApache === 'undefined' || options.oldApache === true) {
        oldApache(router, options);
    }


    if(typeof options.phpShell === 'undefined' || options.phpShell === true) {
        phpShell(router, options);
    }

    if(typeof options.directoryListing === 'undefined' || options.directoryListing === true) {
        directoryListing(router, options);
    }




    return router;
}
