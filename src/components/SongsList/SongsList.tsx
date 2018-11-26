import * as React from 'react';

import { ISong } from '../../models/ISong';
import SongsService from '../../services/SongsService';
import Song from './Song/Song';

export interface ISongsListProps {
    onSongSelected(id: string): void;
}

export interface ISongsState {
    songs: ISong[];
    loading: boolean;
}

export default class SongsList extends React.Component<ISongsListProps, ISongsState> {

    constructor(props: ISongsListProps) {
        super(props);
        this.state = {
            songs: [],
            loading: true
        }
    }

    public componentDidMount() {
        SongsService.getAllSongs().then((songs: ISong[]) => {
            this.setState({
                songs: songs,
                loading: false
            });
        });
    }

    public selectSong = (song: ISong) => {
        if (!song._id) return;
        this.props.onSongSelected(song._id);
    }

    public deleteSong = (song: ISong) => {
        if (!song._id) return;
        SongsService.deleteSong(song._id)
            .then(() => {
                this.setState((previousState: ISongsState) => ({
                    songs: [...previousState.songs.filter(s => s._id !== song._id)]
                }));
            })
    }

    public render() {

        return (
            <div>
                <h1>Songs List</h1>

                {this.state.loading && <h1>Loading</h1>}

                {!this.state.loading &&
                    this.state.songs.map((item, index) => (
                        <Song
                            key={index}
                            item={item}
                            selectSong={this.selectSong}
                            deleteSong={this.deleteSong}
                        >
                        </Song>
                    )
                    )}
            </div>
        );
    }
}