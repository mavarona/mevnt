import { Schema, model } from "mongoose";

let PostSchema: Schema = new Schema(
  {
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
  },
  {
    timestamps: true
  }
);

export default model("Post", PostSchema);
