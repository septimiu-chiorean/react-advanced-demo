import { Switch, Route } from "react-router-dom";
import * as React from 'react';
import Home from './components/Home/Home';
import SongManager from './components/SongManager/SongManager';
import Leaderboard from './components/Leaderboard/Leaderboard';

const Root = () => (
    <main>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/songs" component={Home} />
          <Route path="/song/:id" component={SongManager} />
          <Route path="/song" component={SongManager} />
          <Route path="/leaderboard" render={(props) => (
              <Leaderboard {...props}/>
          )} />
        </Switch>
    </main>
)

export default Root;