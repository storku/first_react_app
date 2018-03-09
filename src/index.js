//with next js I don't think the app uses this file
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
