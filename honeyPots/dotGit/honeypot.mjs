import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * This honeypot simulates a .git directory
 */
export default function (router, options = {}) {


    router.get('/.git/config', (req, res) => {
        res.sendFile(__dirname + '/config', {headers: {'Content-Type': 'text/plain'}});
    });

    router.get('/.git/HEAD', (req, res) => {
        res.sendFile(__dirname + '/HEAD');
    });

    router.get('/.git/index', (req, res) => {
        res.sendFile(__dirname + '/index');
    });
    router.get('/.git/description', (req, res) => {
        res.sendFile(__dirname + '/description');
    });
    router.get('/.git/COMMIT_EDITMSG', (req, res) => {
        res.sendFile(__dirname + '/COMMIT_EDITMSG');
    });

    router.get('/.git/logs/HEAD', (req, res) => {
        res.sendFile(__dirname + '/COMMIT_EDITMSG');
    });

    router.get('/.git/logs/HEAD', (req, res) => {
        res.sendFile(__dirname + '/COMMIT_EDITMSG');
    });

    router.get('/.git/*', (req, res) => {
        res.status(401).send('Unauthorized');
    });


}
