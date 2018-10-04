import { Request, Response, Router } from "express";
import { UserController } from "../controllers/UserController";

export class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public find(req: Request, res: Response): void {
    UserController.get(req.query)
      .then((data: any) => {
        res.status(200).json({ data });
      })
      .catch((error: any) => {
        res.status(500).json({ error });
      });
  }

  public findById(req: Request, res: Response): void {
    const username: string = req.params.username;

    UserController.getById(username)
      .then((data: any) => {
        res.status(200).json({ data });
      })
      .catch((error: any) => {
        res.status(500).json({ error });
      });
  }

  public create(req: Request, res: Response): void {
    UserController.post(req.body)
      .then((data: any) => {
        res.status(201).json({ data });
      })
      .catch((error: any) => {
        res.status(500).json({ error });
      });
  }

  public update(req: Request, res: Response): void {
    const username: string = req.params.username;

    UserController.put(username, req.body)
      .then((data: any) => {
        res.status(200).json({ data });
      })
      .catch((error: any) => {
        res.status(500).json({ error });
      });
  }

  // delete post by params of 'slug'
  public delete(req: Request, res: Response): void {
    const username: string = req.params.username;

    UserController.delete(username)
      .then(() => {
        res.status(204).end();
      })
      .catch((error: any) => {
        res.status(500).json({ error });
      });
  }

  public routes() {
    this.router.get("/", this.find);
    this.router.get("/:username", this.findById);
    this.router.post("/", this.create);
    this.router.put("/:username", this.update);
    this.router.delete("/:username", this.delete);
  }
}

const userRoutes = new UserRouter();
userRoutes.routes();

export default userRoutes.router;
