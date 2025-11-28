import { Router } from "express";

const bookRouter = Router();

let books = [
    {
        id: 1,
        title: "Book 1",
        author: "Author 1",
        description: "Description 1",
        year: 2020
    },
    {
        id: 2,
        title: "Book 2",
        author: "Author 2",
        description: "Description 2",
        year: 2021
    },
    {
        id: 3,
        title: "Book 3",
        author: "Author 3",
        description: "Description 3",
        year: 2022
    }
];

bookRouter.get("/", (_, res) => {
    res.json(books);
});

bookRouter.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const theBook = books.find(book => book.id === id);
    if (theBook) {
        res.json(theBook);
    } else {
        res.status(404).end();
    }
});

bookRouter.post("/", (req, res) => {
    const { title, author, description, year } = req.body;

    if (!title || typeof title !== 'string' ||
        !author || typeof author !== 'string') {
        return res.status(400).json({ error: "Invalid input. Title and author are required strings." });
    }

    if (description !== undefined && typeof description !== 'string') {
        return res.status(400).json({ error: "Invalid input. Description must be a string." });
    }

    if (year !== undefined && typeof year !== 'number') {
        return res.status(400).json({ error: "Invalid input. Year must be a number." });
    }

    const maxId = books.length > 0 ? Math.max(...books.map(book => book.id)) : 0;
    const newBook = {
        id: maxId + 1,
        title,
        author,
        description,
        year
    }
    books.push(newBook);
    res.status(201).json(newBook);
});

bookRouter.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    books = books.filter(book => book.id !== id);
    res.status(204).end();
});

export default bookRouter;