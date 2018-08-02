import * as React from 'react'
import * as ReactDOM from 'react-dom';

import {App} from './App';
import './index.css';
import './assets/css/main.css';
import registerServiceWorker from './registerServiceWorker';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
