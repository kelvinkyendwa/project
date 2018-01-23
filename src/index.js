import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/style.css';
import './css/materialize.css';
import Navbar from './Home/Home';
import Banner from './Home/Banner';
import Cont_1 from './Home/Cont_1';
import Contact from './Home/Contact';

ReactDOM.render(<Navbar />, document.getElementById('app'));
ReactDOM.render(<Banner />, document.getElementById('index-banner'));
ReactDOM.render(<Cont_1 />, document.getElementById('content'));
ReactDOM.render(<Contact />, document.getElementById('contact'));
