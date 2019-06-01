const express = require("express");
const mongoose = require("mongoose");

const databaseConfig = require("./config/database");
class App {
    constructor() {
        this.express = express();
        this.isDev = process.env.NODE_ENV != "production";

        this.database();
        this.middlewares();
        this.routes();
    }

    database() {
        mongoose.connect('mongodb+srv://admin:admin123@marketplace-sprl2.mongodb.net/test?retryWrites=true', {
            useCreateIndex: true,
            useNewUrlParser: true
        })


    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(require("./routes"));
    }
}

module.exports = new App().express;