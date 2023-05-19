import { Router } from "express";
const router = Router();

// import controler
import HomeControler from "../controler/home-controler";

const homeControler = new HomeControler()

router.get("/", homeControler.renderHomePage);

export default router;
