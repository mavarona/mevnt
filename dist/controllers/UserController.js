"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../models/User");
var mongoose_1 = require("mongoose");
exports.UserController = {
    get: function (params) {
        return new mongoose_1.Promise(function (resolve, reject) {
            User_1.default.find(params)
                .populate("posts")
                .then(function (data) { return resolve(data); })
                .catch(function (err) { return reject(err); });
        });
    },
    getById: function (id) {
        return new mongoose_1.Promise(function (resolve, reject) {
            User_1.default.findOne({ username: id })
                .populate("posts")
                .then(function (data) { return resolve(data); })
                .catch(function (err) { return reject(err); });
        });
    },
    post: function (params) {
        return new mongoose_1.Promise(function (resolve, reject) {
            User_1.default.create(params)
                .then(function (data) { return resolve(data); })
                .catch(function (err) { return reject(err); });
        });
    },
    put: function (id, params) {
        return new mongoose_1.Promise(function (resolve, reject) {
            User_1.default.findOneAndUpdate({ username: id }, params, { new: true })
                .then(function (data) { return resolve(data); })
                .catch(function (err) { return reject(err); });
        });
    },
    delete: function (id) {
        return new mongoose_1.Promise(function (resolve, reject) {
            User_1.default.findOneAndRemove({ username: id })
                .then(function (data) { return resolve(data); })
                .catch(function (err) { return reject(err); });
        });
    }
};
//# sourceMappingURL=UserController.js.map