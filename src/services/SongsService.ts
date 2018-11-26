import axios, { AxiosResponse } from 'axios';
import { config } from '../Helpers/config';
import { ISong } from 'src/models/ISong';

export default class SongsService {

    public static getAllSongs = (): Promise<ISong[]> => {
        return axios
                .get(`${config.apiUrl}/songs`, config.restDbconfig)
                .then((result: AxiosResponse) => result.data);
    }

    public static getSongById = (songId: string): Promise<ISong> => {
        return axios
                .get(`${config.apiUrl}/songs/${songId}`, config.restDbconfig)
                .then((result: AxiosResponse) => result.data);
    }

    public static deleteSong = (songId: string): Promise<any>  => {
        return axios
                .delete(`${config.apiUrl}/songs/${songId}`, config.restDbconfig)
                .then((result: AxiosResponse) => result.data);
    }

    public static insertSong = (song: ISong): Promise<ISong> => {
        return axios
                .post(`${config.apiUrl}/songs`, song, config.restDbconfig)
                .then((result: AxiosResponse) => result.data);
    }

    public static updateSong = (songId: string, song: ISong): Promise<ISong> => {
        return axios
                .put(`${config.apiUrl}/songs/${songId}`, song, config.restDbconfig)
                .then((result: AxiosResponse) => result.data)
    }
}