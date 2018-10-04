"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post_1 = require("../models/Post");
var mongoose_1 = require("mongoose");
exports.PostController = {
    get: function (params) {
        return new mongoose_1.Promise(function (resolve, reject) {
            Post_1.default.find(params)
                .then(function (data) { return resolve(data); })
                .catch(function (err) { return reject(err); });
        });
    },
    getById: function (id) {
        return new mongoose_1.Promise(function (resolve, reject) {
            Post_1.default.findOne({ slug: id })
                .then(function (data) { return resolve(data); })
                .catch(function (err) { return reject(err); });
        });
    },
    post: function (params) {
        return new mongoose_1.Promise(function (resolve, reject) {
            Post_1.default.create(params)
                .then(function (data) { return resolve(data); })
                .catch(function (err) { return reject(err); });
        });
    },
    put: function (id, params) {
        return new mongoose_1.Promise(function (resolve, reject) {
            Post_1.default.findOneAndUpdate({ slug: id }, params, { new: true })
                .then(function (data) { return resolve(data); })
                .catch(function (err) { return reject(err); });
        });
    },
    delete: function (id) {
        return new mongoose_1.Promise(function (resolve, reject) {
            Post_1.default.findOneAndRemove({ slug: id })
                .then(function (data) { return resolve(data); })
                .catch(function (err) { return reject(err); });
        });
    }
};
//# sourceMappingURL=PostController.js.map