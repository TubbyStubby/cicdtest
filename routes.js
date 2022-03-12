const router = require('express').Router();
const nodebackForPromise = require('bluebird/js/release/nodeback');
const rclient = require('./redis-helper');

router.get('/', async (req, res, next) => { res.send('Hello World!') });
router.post('/cache/:stuff', async (req, res) => {
    let result = await rclient.setAsync('testkey', req.params.stuff);
    console.log(result);
    return res.send(result);
});
router.get('/cache/:stuff', async (req, res) => {
    let result = await rclient.getAsync('testkey');
    console.log(result);
    return res.send(result);
});

noice;

module.exports = router;