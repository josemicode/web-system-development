import pool from '../db/index.js';

export const findAll = async () => {
    const result = await pool.query('SELECT * FROM tracks ORDER BY title ASC');
    return result.rows;
};

export const findById = async (id) => {
    const result = await pool.query('SELECT * FROM tracks WHERE id = $1', [id]);
    return result.rows[0];
};

export const findByAlbumId = async (albumId) => {
    const result = await pool.query('SELECT * FROM tracks WHERE album_id = $1 ORDER BY id ASC', [albumId]); // ordered by insertion usually implies track order if not specified
    return result.rows;
};

export const findByArtistId = async (artistId) => {
    const result = await pool.query('SELECT * FROM tracks WHERE artist_id = $1 ORDER BY title ASC', [artistId]);
    return result.rows;
};

export const create = async (track) => {
    const { title, duration, artist_id, album_id } = track;
    const result = await pool.query(
        'INSERT INTO tracks (title, duration, artist_id, album_id) VALUES ($1, $2, $3, $4) RETURNING *',
        [title, duration, artist_id, album_id]
    );
    return result.rows[0];
};

export const update = async (id, track) => {
    const { title, duration, artist_id, album_id } = track;
    const result = await pool.query(
        'UPDATE tracks SET title = $1, duration = $2, artist_id = $3, album_id = $4 WHERE id = $5 RETURNING *',
        [title, duration, artist_id, album_id, id]
    );
    return result.rows[0];
};

export const remove = async (id) => {
    const result = await pool.query('DELETE FROM tracks WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};
