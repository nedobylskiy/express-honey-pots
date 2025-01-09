
/**
 * This honeypot simulates an active PHP shell
 */
export default function(router, options = {
}) {

        router.get('/img/a.php', (req, res) => {
            const hasCmd = req.query.cmd;

            let response = '';

            switch(hasCmd) {
                case 'ls':
                    response = 'a.php image.gif';
                    break;
                case 'whoami':
                    response = 'www-data';
                    break;
                case 'pwd':
                    response = '/var/www/html/img';
                    break;
                case 'uname -a':
                    response = 'Linux ubuntu 5.4.0-80-generic #90-Ubuntu SMP Fri Jul 9 22:49:44 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux';
                    break;
                case '':
                    response = ``;
                    break;
                default:
                    response = 'Error: command not found';
                    break;
            }

     res.send(`<html>
<body>
<form method="GET" name="/img/a.php">
<input type="TEXT" name="cmd" autofocus id="cmd" size="80">
<input type="SUBMIT" value="Execute">
</form>
<pre>
${response}
</pre>
</body>
</html>`);
        });
}
