import * as TrackModel from '../models/trackModel.js';
import { trackSchema } from '../db/schemas.js';

export const listTracks = async (req, res, next) => {
    try {
        const { album_id, artist_id } = req.query;
        let tracks;
        if (album_id) {
            tracks = await TrackModel.findByAlbumId(album_id);
        } else if (artist_id) {
            tracks = await TrackModel.findByArtistId(artist_id);
        } else {
            tracks = await TrackModel.findAll();
        }
        res.json(tracks);
    } catch (error) {
        next(error);
    }
};

export const getTrack = async (req, res, next) => {
    try {
        const track = await TrackModel.findById(req.params.id);
        if (!track) {
            return res.status(404).json({ message: 'Track not found' });
        }
        res.json(track);
    } catch (error) {
        next(error);
    }
};

export const createTrack = async (req, res, next) => {
    try {
        const validatedData = trackSchema.parse(req.body);
        const newTrack = await TrackModel.create(validatedData);
        res.status(201).json(newTrack);
    } catch (error) {
        next(error);
    }
};

export const updateTrack = async (req, res, next) => {
    try {
        const validatedData = trackSchema.parse(req.body);
        const updatedTrack = await TrackModel.update(req.params.id, validatedData);
        if (!updatedTrack) {
            return res.status(404).json({ message: 'Track not found' });
        }
        res.json(updatedTrack);
    } catch (error) {
        next(error);
    }
};

export const deleteTrack = async (req, res, next) => {
    try {
        const deletedTrack = await TrackModel.remove(req.params.id);
        if (!deletedTrack) {
            return res.status(404).json({ message: 'Track not found' });
        }
        res.json({ message: 'Track deleted successfully' });
    } catch (error) {
        next(error);
    }
};
