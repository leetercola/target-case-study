import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ItemData has many redundant arrays and if I have time I would use something like normalizr to flatten the data. 
//If I was using Redux possibly reselect or custom parsing methods to trim the data
import ItemData from './item-data.json';

ReactDOM.render( < App ItemData={ItemData.CatalogEntryView[0]} / > , document.getElementById('root'));
registerServiceWorker();

