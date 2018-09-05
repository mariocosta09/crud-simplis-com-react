import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import Crud from './Crude';
 ReactDOM.render( 
     <Crud /> ,
     document.getElementById('root')
 );

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
