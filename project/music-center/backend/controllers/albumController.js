import * as AlbumModel from '../models/albumModel.js';
import { albumSchema } from '../db/schemas.js';

export const listAlbums = async (req, res, next) => {
    try {
        const { artist_id } = req.query;
        let albums;
        if (artist_id) {
            albums = await AlbumModel.findByArtistId(artist_id);
        } else {
            albums = await AlbumModel.findAll();
        }
        res.json(albums);
    } catch (error) {
        next(error);
    }
};

export const getAlbum = async (req, res, next) => {
    try {
        const album = await AlbumModel.findById(req.params.id);
        if (!album) {
            return res.status(404).json({ message: 'Album not found' });
        }
        res.json(album);
    } catch (error) {
        next(error);
    }
};

export const createAlbum = async (req, res, next) => {
    try {
        const validatedData = albumSchema.parse(req.body);
        const newAlbum = await AlbumModel.create(validatedData);
        res.status(201).json(newAlbum);
    } catch (error) {
        next(error);
    }
};

export const updateAlbum = async (req, res, next) => {
    try {
        const validatedData = albumSchema.parse(req.body);
        const updatedAlbum = await AlbumModel.update(req.params.id, validatedData);
        if (!updatedAlbum) {
            return res.status(404).json({ message: 'Album not found' });
        }
        res.json(updatedAlbum);
    } catch (error) {
        next(error);
    }
};

export const deleteAlbum = async (req, res, next) => {
    try {
        const deletedAlbum = await AlbumModel.remove(req.params.id);
        if (!deletedAlbum) {
            return res.status(404).json({ message: 'Album not found' });
        }
        res.json({ message: 'Album deleted successfully' });
    } catch (error) {
        next(error);
    }
};
