import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ItemData from './item-data.json';

ReactDOM.render( < App ItemData={ItemData.CatalogEntryView[0]} / > , document.getElementById('root'));
registerServiceWorker();

