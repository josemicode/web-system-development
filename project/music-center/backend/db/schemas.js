import { z } from 'zod';

export const artistSchema = z.object({
    name: z.string().min(1, "Name is required").max(255),
});

export const albumSchema = z.object({
    title: z.string().min(1, "Title is required").max(255),
    artist_id: z.number().int().positive().nullable().optional(),
    release_date: z.string().date().optional().or(z.date()),
    cover_image_url: z.string().url().optional().nullable(),
});

export const trackSchema = z.object({
    title: z.string().min(1, "Title is required").max(255),
    duration: z.number().int().nonnegative().optional(),
    artist_id: z.number().int().positive(),
    album_id: z.number().int().positive().nullable().optional(),
});
