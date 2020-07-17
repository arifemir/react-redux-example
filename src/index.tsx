import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/container/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Provider} from 'react-redux'
import configureStore from "./redux/reducers/configureStore";

const store = configureStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
