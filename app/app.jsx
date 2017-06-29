if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';
import List from './components/List.jsx';

const App = () => (
    <div>
        <List/>
    </div>

);

ReactDOM.render(
    <App/>
    , document.getElementById('root'));
