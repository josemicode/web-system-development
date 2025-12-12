import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const isProduction = process.env.DATABASE_URL && process.env.DATABASE_URL.includes('render.com');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: isProduction ? { rejectUnauthorized: false } : false,
});

export const query = (text, params) => pool.query(text, params);
export default pool;
