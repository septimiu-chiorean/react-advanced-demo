import * as React from 'react';
import './Home.css';
import Lyrics from '../Lyrics/Lyrics';
import SongsList from '../SongsList/SongsList';

export interface IHomeState {
  songId?: string;
}

export default class Home extends React.Component<any, IHomeState> {

  constructor(props: any) {
    super(props);

    this.state = {
      //songId: undefined
    }
  }

  public songSelected = (songId: string) => {
    this.setState({
      songId: songId
    });
  }

  public render() {
    return (
      <div className="home">
        <SongsList onSongSelected={this.songSelected} />
        {!!this.state.songId &&
          <Lyrics songId={this.state.songId} />
        }
      </div>
    )
  }
}