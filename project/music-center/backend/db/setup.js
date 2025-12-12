import pool from './index.js';

const createTablesQuery = `
-- 1. Create the Artists table first
CREATE TABLE IF NOT EXISTS artists (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Create the Albums table
CREATE TABLE IF NOT EXISTS albums (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist_id INTEGER REFERENCES artists(id) ON DELETE SET NULL, 
    release_date DATE,
    cover_image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Create the Tracks table
CREATE TABLE IF NOT EXISTS tracks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    duration INTEGER,
    artist_id INTEGER NOT NULL REFERENCES artists(id) ON DELETE CASCADE,
    album_id INTEGER REFERENCES albums(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

async function setup() {
    try {
        console.log('Creating tables...');
        await pool.query(createTablesQuery);
        console.log('Tables created successfully.');
    } catch (err) {
        console.error('Error creating tables:', err);
    } finally {
        await pool.end();
    }
}

setup();
