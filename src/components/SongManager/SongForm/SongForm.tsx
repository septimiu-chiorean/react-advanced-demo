import * as React from 'react';

export interface ISongFormProps {
    handleChange(e: any): void;
    name: string;
    artist: string;
    lyrics: string;
}

const SongForm = (props: ISongFormProps) => {
    return (
        <div>
            <h1>Song Manager</h1>
            <label htmlFor="artist">Artist</label>
            <input type="text" name="artist" onChange={props.handleChange} value={props.artist}/><br />

            <label htmlFor="name">Song Name</label>
            <input type="text" name="name" onChange={props.handleChange} value={props.name}/><br />
            
            <label htmlFor="lyrics">Lyrics</label>
            <textarea name="lyrics" onChange={props.handleChange} value={props.lyrics}/><br />
        </div>
    );
}

export default SongForm;