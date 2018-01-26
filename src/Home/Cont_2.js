import React from 'react';
import { Parallax } from 'react-materialize';
import bgs from './background2.jpg';

const para = 'A modern responsive front-end framework based on Material';
export class Cont2 extends React.Component {
  render() {
    return (
      <div>
        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h5 className="header col s12 light">
                  {para}
                  Design
                </h5>
              </div>
            </div>
          </div>
          <Parallax imageSrc={bgs} alt="Unsplashed background img 1" />
        </div>
      </div>
    );
  }
}
