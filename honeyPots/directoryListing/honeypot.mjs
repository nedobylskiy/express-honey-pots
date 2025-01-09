import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


/**
 *
 */
export default function(router, options = {
}) {

  router.get('/img', (req, res) => {
    res.send(`
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<html>
 <head>
  <title>Index of /img</title>
 </head>
 <body>
<h1>Index of /static/img</h1>
  <table>
   <tr><th valign="top"><img src="/icons/blank.gif" alt="[ICO]"></th><th><a href="?C=N;O=D">Name</a></th><th><a href="?C=M;O=A">Last modified</a></th><th><a href="?C=S;O=A">Size</a></th><th><a href="?C=D;O=A">Description</a></th></tr>
   <tr><th colspan="5"><hr></th></tr>
<tr><td valign="top"><img src="/icons/image2.gif" alt="[IMG]"></td><td><a href="/img/footerIcon.gif">footerIcon.gif</a></td><td align="right">2023-10-23 16:26  </td><td align="right">68K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/image2.gif" alt="[IMG]"></td><td><a href="/img/a.php">a.php</a></td><td align="right">2023-02-16 16:10  </td><td align="right">118K</td><td>&nbsp;</td></tr>
   <tr><th colspan="5"><hr></th></tr>
</table>
<address>Apache/2.4.49 (Ubuntu) Server at localhost Port 443</address>
</body></html>
`);
  });

  router.get('/icons/*.gif', (req, res) => {
      res.sendFile(__dirname + '/icons/image2.gif');
  });

  router.get('/img/footerIcon.gif', (req, res) => {
      res.sendFile(__dirname + '/icons/image2.gif');
  });

  router.get('/img/a.php', (req, res) => {
      res.send(''); // simulates a silent shell
  });
}
