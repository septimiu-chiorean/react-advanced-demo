import * as React from 'react';
import SongsService from '../../services/SongsService';
import { ISong } from 'src/models/ISong';

export interface ILyricsProps {
    songId: string;
}

export interface ILyricsState {
    lyrics: string;
    loading: boolean;
}

export default class Lyrics extends React.Component<ILyricsProps, ILyricsState> {

    constructor(props: any) {
        super(props);
        
        this.state = {
            lyrics: '',
            loading: false
        }
    }

    componentWillReceiveProps(props: ILyricsProps) {
        this.setState({
            loading: true
        });
        SongsService.getSongById(props.songId)
            .then((result: ISong) => {
                this.setState({
                    lyrics: result.lyrics,
                    loading: false
                });
            });
    }

    public render() {
        return (
            <div className="lyrics">
                {
                    this.state.loading
                        ? <h2>Loading</h2>
                        : <span>{this.state.lyrics}</span>
                }
            </div>
        );
    }
}