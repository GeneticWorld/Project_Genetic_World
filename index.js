console.clear();
const express = require('express');
//const dotenv = require('dotenv');
const server = express();
// dotenv.config();
// const port = process.env.PORT;
const port = 3000;

server.use("/resources", express.static("public"));
server.use("/resources", express.static(__dirname + "/public"));

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('../views/login');
})


server.listen(port, () => {
    console.log(`Activo el puerto: ${port}`);
})