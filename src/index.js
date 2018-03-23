import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Data from './data';

ReactDOM.render(<App data={[{name:'test'}]}/>, document.getElementById('root'));
registerServiceWorker();
