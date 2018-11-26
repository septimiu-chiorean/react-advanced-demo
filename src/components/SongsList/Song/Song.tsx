import * as React from 'react';
import './Song.css';
import { ISong } from '../../../models/ISong';
import { Link } from 'react-router-dom';


export interface ISongProps {
    item: ISong;
    selectSong(item: ISong): void;
    deleteSong(item: ISong): void;
}

const Song = (props: ISongProps) => {
    return (
        <div key={props.item._id} >
            <span className='song' onClick={() => { props.selectSong(props.item) }}>{`${props.item.artist} - ${props.item.songname}`}</span>
            <button><Link to={`/song/${props.item._id}`}>Update Song</Link></button>
            <button onClick={() => props.deleteSong(props.item)}>Delete Song</button>
        </div>
    );
}

export default Song;