import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/container/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />

  ,
  document.getElementById('root')
);

serviceWorker.unregister();
