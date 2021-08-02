const { Router } = require('express');
const { resultsApi } = require('../controllers/results');


const router = Router();

router.post('/', resultsApi)




module.exports = router;