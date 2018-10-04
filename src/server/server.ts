import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as logger from "morgan";
import * as helmet from "helmet";
import * as cors from "cors";
import Config from "../config/config";

// Routers
import { PostRouter } from "../routes/PostRouter";
import { UserRouter } from "../routes/UserRouter";

const postRouter = new PostRouter();
const userRouter = new UserRouter();

export class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    // setup mongodb
    mongoose.connect(Config.MONGO_URI || process.env.MONGODB_URI);

    // Middleware
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(logger("dev"));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());

    // cors
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", Config.APP_URI);
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
      );
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
      );
      res.header("Access-Control-Allow-Credentials", "true");
      next();
    });
  }

  // application routes
  public routes(): void {
    const router: express.Router = express.Router();

    this.app.use("/", router);
    this.app.use("/api/v1/posts", postRouter.router);
    this.app.use("/api/v1/users", userRouter.router);
  }
}

export default new Server().app;
