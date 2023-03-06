const express = require('express');
const router = express.Router();

router.get('/regi', (req, res) => {
    res.render('registro.ejs')
})

router.get('/log', (req, res) => {
    res.render('login.ejs')
})

router.get('/regiCita', (req, res) => {
    res.render('formularioAgendamiento.ejs')
})

router.get('/viewCita', (req, res) => {
    res.render('visualizacionCita.ejs')
})

module.exports = router;