"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var compression = require("compression");
var logger = require("morgan");
var helmet = require("helmet");
var cors = require("cors");
var config_1 = require("../config/config");
var PostRouter_1 = require("../routes/PostRouter");
var UserRouter_1 = require("../routes/UserRouter");
var postRouter = new PostRouter_1.PostRouter();
var userRouter = new UserRouter_1.UserRouter();
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        mongoose.connect(config_1.default.MONGO_URI || process.env.MONGODB_URI);
        this.app.use(express.static(__dirname + "/public"));
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(logger("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", config_1.default.APP_URI);
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
            res.header("Access-Control-Allow-Credentials", "true");
            next();
        });
    };
    Server.prototype.routes = function () {
        var router = express.Router();
        this.app.use("/", router);
        this.app.use("/api/v1/posts", postRouter.router);
        this.app.use("/api/v1/users", userRouter.router);
    };
    return Server;
}());
exports.Server = Server;
exports.default = new Server().app;
//# sourceMappingURL=server.js.map