if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';

const App = () => (
    <div>
        Pokemon
    </div>

);

ReactDOM.render(
    <App/>
    , document.getElementById('root'));
