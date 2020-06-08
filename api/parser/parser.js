const Mercury = require('@postlight/mercury-parser');

module.exports = async function (req, res) {
    try {
        const { url } = req.query;

        await Mercury.parse(url).then(result => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result));
        });
    } catch (e) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Server Error</h1><p>Sorry, there was a problem</p>');
        console.error(e.message);
    }
};
