import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/songs'>Home</Link><br />
                        </li>
                        <li>
                            <Link to='/song'>Add song</Link><br />
                        </li>
                        <li>
                            <Link to='/leaderboard'>Leaderboard</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}