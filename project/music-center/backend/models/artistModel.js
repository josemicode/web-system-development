import pool from '../db/index.js';

export const findAll = async () => {
    const result = await pool.query('SELECT * FROM artists ORDER BY name ASC');
    return result.rows;
};

export const findById = async (id) => {
    const result = await pool.query('SELECT * FROM artists WHERE id = $1', [id]);
    return result.rows[0];
};

export const create = async (artist) => {
    const { name } = artist;
    const result = await pool.query(
        'INSERT INTO artists (name) VALUES ($1) RETURNING *',
        [name]
    );
    return result.rows[0];
};

export const update = async (id, artist) => {
    const { name } = artist;
    const result = await pool.query(
        'UPDATE artists SET name = $1 WHERE id = $2 RETURNING *',
        [name, id]
    );
    return result.rows[0];
};

export const remove = async (id) => {
    const result = await pool.query('DELETE FROM artists WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};
