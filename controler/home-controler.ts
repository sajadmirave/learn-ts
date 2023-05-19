import { Request, Response } from "express";

class HomeControler {
  private message: string = "Hello World";

  renderHomePage(req: Request, res: Response) {
    res.send(this.message);
  }
}

export default HomeControler;
