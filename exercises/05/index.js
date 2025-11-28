import express from "express";

import indexRouter from "./routes/indexRoutes.js";
import booksRouter from "./routes/bookRoutes.js";

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use("/", indexRouter);
app.use("/books", booksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});