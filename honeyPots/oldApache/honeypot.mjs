
/**
 * Now we respond with vulnerable server version (CVE-2021-41773)
 */
export default function(router, options = {
    serverVersion: undefined
}) {

    router.use((req, res, next) => {
            res.setHeader('server', options.serverVersion || 'Apache/2.4.49 (Ubuntu)' );
        next();
    });

}
