const express = require('express');
const router = express.Router();

router.get('/regi', (req, res) => {
    res.render('registro.ejs')
})

module.exports = router;