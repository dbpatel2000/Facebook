import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './containers/Profile/profile';

const App = () => (
    <div className="App">
        <Profile/>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));


