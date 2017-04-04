import React from 'react';
import App from './components/app';
import ReactDOM from 'react-dom';
import { firebase } from './components/firebase/firebase';

import '../assets/css/index.scss';	


import '../assets/venders/bootstrap-3.3.7/js/bootstrap.min.js';
import '../assets/venders/material/js/material.min.js';

ReactDOM.render(<App index={true} firebase={firebase()}/>, document.getElementById('main'));


