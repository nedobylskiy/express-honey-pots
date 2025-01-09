
/**
 * This is a simple honeypot that will set the x-powered-by header to a specific PHP version.
 */
export default function(router, options = {
    phpVersion: undefined
}) {

    router.use((req, res, next) => {
            res.setHeader('x-powered-by', options.phpVersion || 'PHP/4.3.11' );
        next();
    });

}
