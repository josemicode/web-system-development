import * as ArtistModel from '../models/artistModel.js';
import { artistSchema } from '../db/schemas.js';

export const listArtists = async (req, res, next) => {
    try {
        const artists = await ArtistModel.findAll();
        res.json(artists);
    } catch (error) {
        next(error);
    }
};

export const getArtist = async (req, res, next) => {
    try {
        const artist = await ArtistModel.findById(req.params.id);
        if (!artist) {
            return res.status(404).json({ message: 'Artist not found' });
        }
        res.json(artist);
    } catch (error) {
        next(error);
    }
};

export const createArtist = async (req, res, next) => {
    try {
        const validatedData = artistSchema.parse(req.body);
        const newArtist = await ArtistModel.create(validatedData);
        res.status(201).json(newArtist);
    } catch (error) {
        next(error);
    }
};

export const updateArtist = async (req, res, next) => {
    try {
        const validatedData = artistSchema.parse(req.body);
        const updatedArtist = await ArtistModel.update(req.params.id, validatedData);
        if (!updatedArtist) {
            return res.status(404).json({ message: 'Artist not found' });
        }
        res.json(updatedArtist);
    } catch (error) {
        next(error);
    }
};

export const deleteArtist = async (req, res, next) => {
    try {
        const deletedArtist = await ArtistModel.remove(req.params.id);
        if (!deletedArtist) {
            return res.status(404).json({ message: 'Artist not found' });
        }
        res.json({ message: 'Artist deleted successfully' });
    } catch (error) {
        next(error);
    }
};
