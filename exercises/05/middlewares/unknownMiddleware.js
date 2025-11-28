export const unknownEndpoint = (_, res) => {
    res.status(404).json({ error: "Unknown endpoint" });
};