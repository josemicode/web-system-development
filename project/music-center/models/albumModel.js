import pool from '../db/index.js';

export const findAll = async () => {
    const result = await pool.query('SELECT * FROM albums ORDER BY title ASC');
    return result.rows;
};

export const findById = async (id) => {
    const result = await pool.query('SELECT * FROM albums WHERE id = $1', [id]);
    return result.rows[0];
};

export const findByArtistId = async (artistId) => {
    const result = await pool.query('SELECT * FROM albums WHERE artist_id = $1 ORDER BY release_date DESC', [artistId]);
    return result.rows;
};

export const create = async (album) => {
    const { title, artist_id, release_date, cover_image_url } = album;
    const result = await pool.query(
        'INSERT INTO albums (title, artist_id, release_date, cover_image_url) VALUES ($1, $2, $3, $4) RETURNING *',
        [title, artist_id, release_date, cover_image_url]
    );
    return result.rows[0];
};

export const update = async (id, album) => {
    const { title, artist_id, release_date, cover_image_url } = album;
    const result = await pool.query(
        'UPDATE albums SET title = $1, artist_id = $2, release_date = $3, cover_image_url = $4 WHERE id = $5 RETURNING *',
        [title, artist_id, release_date, cover_image_url, id]
    );
    return result.rows[0];
};

export const remove = async (id) => {
    const result = await pool.query('DELETE FROM albums WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};
