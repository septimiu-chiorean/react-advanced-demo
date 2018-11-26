import * as React from 'react';
import SongsService from '../../services/SongsService';
import { ISong } from 'src/models/ISong';
import { RouteComponentProps } from 'react-router';
import SongForm from './SongForm/SongForm';

export interface ISongManagerState {
    name: string;
    artist: string;
    lyrics: string;
}

export interface ISongManagerProps extends RouteComponentProps<any> {}

export default class SongManager extends React.Component<ISongManagerProps,ISongManagerState> {

constructor(props: ISongManagerProps) {
    super(props);

    this.state = {
        name: '',
        artist: '',
        lyrics: ''
    }
}

    handleChange = (e: any) => {
        const { name, value } = e.target;
        this.setState((prevState: ISongManagerState) => (
            { 
                ...prevState,
                [name]: value
            }
        ));
    }
    
    componentDidMount() {
        if(this.props.match.params.id !== undefined) {
            SongsService.getSongById(this.props.match.params.id)
                .then((song: ISong) => {
                    this.setState({
                        name: song.songname,
                        artist: song.artist,
                        lyrics: song.lyrics
                    });
                });
        } 
    }

    addSong = () => {
        const newSong: ISong = {
            songname: this.state.name,
            artist: this.state.artist,
            lyrics: this.state.lyrics
        };
        SongsService.insertSong(newSong)
            .then(() => {
                this.props.history.push('/');
            });
    }
    
    updateSong = () => {
        const updatedSong: ISong = {
            songname: this.state.name,
            artist: this.state.artist,
            lyrics: this.state.lyrics
        }
        SongsService.updateSong(this.props.match.params.id, updatedSong)
            .then(() => {
                this.props.history.push('/');
            });
    }

    public render() {
        return (
            <div className="App">
                <SongForm 
                    artist={this.state.artist}
                    lyrics={this.state.lyrics}
                    name={this.state.name}
                    handleChange={this.handleChange}
                />

                {
                    this.props.match.params.id === undefined ?
                        <button onClick={this.addSong}>Add song</button> :
                        <button onClick={this.updateSong}>Update song</button>
                }
                
            </div>
        )
    }
}