import { Request, Response, Router } from "express";
import { PostController } from "../controllers/PostController";

export class PostRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public find(req: Request, res: Response): void {
    PostController.get(req.query)
      .then((data: any) => {
        res.status(200).json({ data });
      })
      .catch((error: any) => {
        res.status(500).json({ error });
      });
  }

  public findById(req: Request, res: Response): void {
    const slug: string = req.params.slug;

    PostController.getById(slug)
      .then((data: any) => {
        res.status(200).json({ data });
      })
      .catch((error: any) => {
        res.status(500).json({ error });
      });
  }

  public create(req: Request, res: Response): void {
    PostController.post(req.body)
      .then((data: any) => {
        res.status(201).json({ data });
      })
      .catch((error: any) => {
        res.status(500).json({ error });
      });
  }

  public update(req: Request, res: Response): void {
    const slug: string = req.params.slug;

    PostController.put(slug, req.body)
      .then((data: any) => {
        res.status(200).json({ data });
      })
      .catch((error: any) => {
        res.status(500).json({ error });
      });
  }

  // delete post by params of 'slug'
  public delete(req: Request, res: Response): void {
    const slug: string = req.params.slug;

    PostController.delete(slug)
      .then(() => {
        res.status(204).end();
      })
      .catch((error: any) => {
        res.status(500).json({ error });
      });
  }

  public routes() {
    this.router.get("/", this.find);
    this.router.get("/:slug", this.findById);
    this.router.post("/", this.create);
    this.router.put("/:slug", this.update);
    this.router.delete("/:slug", this.delete);
  }
}

const postRoutes = new PostRouter();
postRoutes.routes();

export default postRoutes.router;
