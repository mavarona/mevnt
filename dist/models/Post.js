"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PostSchema = new mongoose_1.Schema({
    title: {
        type: String,
        default: "",
        required: true
    },
    slug: {
        type: String,
        default: "",
        required: true,
        unique: true
    },
    content: {
        type: String,
        default: "",
        required: true
    },
    featuredImage: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        default: ""
    },
    published: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model("Post", PostSchema);
//# sourceMappingURL=Post.js.map