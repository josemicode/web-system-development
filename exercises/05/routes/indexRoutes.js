import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/health", (_, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
    });
});

indexRouter.get("/", (_, res) => {
    res.send("Hello World!");
});

export default indexRouter;