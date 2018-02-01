import React from 'react';
import { Navbar } from './Navbar';
import { Banner } from './Banner';
import { Cont1 } from './Cont_1';
import { Cont2 } from './Cont_2';
import { Cont3 } from './Cont_3';
import { Contact } from './Contact';
import { Footer } from './Footer';


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Cont1 />
        <Cont2 />
        <Contact />
        <Cont3 />
        <Footer />
      </div>
    );
  }
}
