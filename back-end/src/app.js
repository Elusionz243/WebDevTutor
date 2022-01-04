cons path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");
const knex = require('./db/connection');

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const app = express();

app.set('db', knex);
app.use(cors());
app.use(express.json());

app.use(notFound);
app.use(errorHandler);

module.exports = app;
