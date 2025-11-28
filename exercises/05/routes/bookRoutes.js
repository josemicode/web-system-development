import { Router } from "express";

const bookRouter = Router();

bookRouter.get("/", (_, res) => {
    res.send("Books");
});

bookRouter.get("/:id", (_, res) => {
    res.send("Book");
});

bookRouter.post("/", (_, res) => {
    res.send("Book");
});

bookRouter.delete("/:id", (_, res) => {
    res.send("Book");
});

export default bookRouter;