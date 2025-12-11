import { ZodError } from 'zod';

export const errorHandler = (err, req, res, next) => {
    console.error(err);

    if (err instanceof ZodError) {
        let issues = err.errors;

        if (!issues && err.message) {
            try {
                issues = JSON.parse(err.message);
            } catch (e) {
                console.error('Failed to parse ZodError message:', e);
            }
        }

        const formattedErrors = (issues || []).map((issue) => ({
            field: issue.path ? issue.path.join('.') : 'unknown',
            message: issue.message,
        }));

        return res.status(400).json({
            message: 'Validation Error',
            type: err.name,
            errors: formattedErrors,
        });
    }

    // PostgreSQL Error Handling
    if (err.code) {
        // Foreign Key Violation
        if (err.code === '23503') {
            return res.status(400).json({
                message: 'Foreign Key Violation',
                type: 'DatabaseError',
                errors: [{ message: 'The referenced resource does not exist. Please check your IDs.' }]
            });
        }

        // Unique Constraint Violation
        if (err.code === '23505') {
            return res.status(409).json({
                message: 'Conflict Error',
                type: 'DatabaseError',
                errors: [{ message: 'A record with this value already exists.' }]
            });
        }
    }

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({ message });
};
