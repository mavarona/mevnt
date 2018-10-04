import User from "../models/User";
import { Promise } from "mongoose";

export const UserController: any = {
  get: (params: any) => {
    return new Promise((resolve: any, reject: any) => {
      User.find(params)
        .populate("posts")
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  },
  getById: (id: any) => {
    return new Promise((resolve: any, reject: any) => {
      User.findOne({ username: id })
        .populate("posts")
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  },
  post: (params: any) => {
    return new Promise((resolve: any, reject: any) => {
      User.create(params)
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  },
  put: (id: any, params: any) => {
    return new Promise((resolve: any, reject: any) => {
      User.findOneAndUpdate({ username: id }, params, { new: true })
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  },
  delete: (id: any) => {
    return new Promise((resolve: any, reject: any) => {
      User.findOneAndRemove({ username: id })
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
};
