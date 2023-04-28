import express from "express";
import morgan from "morgan";
import config from "./config";
const mysql = require("mysql2")
const app = express();
const p1Routes = require('./routes/p1.routes')
const bodyParser = require('body-parser');
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.set("port",4013);
// Middlewares
app.use(morgan("dev"));

app.use("",p1Routes.router);

/**
 * Creamos pool conection para evitar crear muchas conexiones
 * @type {Pool}
 */
app.locals.mysqlConnectionPool = mysql.createPool(config.mysql);

export default  app;