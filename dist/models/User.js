"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        default: "",
        required: true
    },
    username: {
        type: String,
        default: "",
        required: true,
        unique: true
    },
    email: {
        type: String,
        default: "",
        required: true,
        unique: true
    },
    password: {
        type: String,
        default: "",
        required: true
    },
    posts: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
}, {
    timestamps: true
});
exports.default = mongoose_1.model("User", UserSchema);
//# sourceMappingURL=User.js.map