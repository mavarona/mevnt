import Post from "../models/Post";
import { Promise } from "mongoose";
import * as mongoose from "mongoose";

export const PostController: any = {
  get: (params: any) => {
    return new Promise((resolve: any, reject: any) => {
      Post.find(params)
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  },
  getById: (id: any) => {
    return new Promise((resolve: any, reject: any) => {
      Post.findOne({ slug: id })
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  },
  post: (params: any) => {
    return new Promise((resolve: any, reject: any) => {
      Post.create(params)
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  },
  put: (id: any, params: any) => {
    return new Promise((resolve: any, reject: any) => {
      Post.findOneAndUpdate({ slug: id }, params, { new: true })
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  },
  delete: (id: any) => {
    return new Promise((resolve: any, reject: any) => {
      Post.findOneAndRemove({ slug: id })
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
};
