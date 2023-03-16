console.clear();
import express from 'express';
import message from "./config/message.js";
import enviroment from "./config/enviroments";

const app = express();

app.set("PORT",process.env.PORT || 3000);

app.use("/resources", express.static("public"));
app.use("/resources", express.static(__dirname + "/public"));

app.use('/', require('../router'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('../views/login');
})

export default app;