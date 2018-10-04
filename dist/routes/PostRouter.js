"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PostController_1 = require("../controllers/PostController");
var PostRouter = (function () {
    function PostRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    PostRouter.prototype.find = function (req, res) {
        PostController_1.PostController.get(req.query)
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    PostRouter.prototype.findById = function (req, res) {
        var slug = req.params.slug;
        PostController_1.PostController.getById(slug)
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    PostRouter.prototype.create = function (req, res) {
        PostController_1.PostController.post(req.body)
            .then(function (data) {
            res.status(201).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    PostRouter.prototype.update = function (req, res) {
        var slug = req.params.slug;
        PostController_1.PostController.put(slug, req.body)
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    PostRouter.prototype.delete = function (req, res) {
        var slug = req.params.slug;
        PostController_1.PostController.delete(slug)
            .then(function () {
            res.status(204).end();
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    PostRouter.prototype.routes = function () {
        this.router.get("/", this.find);
        this.router.get("/:slug", this.findById);
        this.router.post("/", this.create);
        this.router.put("/:slug", this.update);
        this.router.delete("/:slug", this.delete);
    };
    return PostRouter;
}());
exports.PostRouter = PostRouter;
var postRoutes = new PostRouter();
postRoutes.routes();
exports.default = postRoutes.router;
//# sourceMappingURL=PostRouter.js.map