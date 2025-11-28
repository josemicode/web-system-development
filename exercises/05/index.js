import express from "express";

import indexRouter from "./routes/indexRoutes.js";
import booksRouter from "./routes/bookRoutes.js";
import { requestLogger } from "./middlewares/loggerMiddleware.js";
import { unknownEndpoint } from "./middlewares/unknownMiddleware.js";

const app = express();

app.use(express.json());
app.use(requestLogger);
app.use(express.static('public'));

app.use("/", indexRouter);
app.use("/books", booksRouter);

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});