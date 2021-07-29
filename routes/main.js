const { Router } = require('express');


const router = Router();

router.get('/', (req,res) => {
    res.render('main.hbs')

    console.log('tamos aca');
})



module.exports = router;