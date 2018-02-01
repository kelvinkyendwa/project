import React from 'react';
import { Parallax } from 'react-materialize';
import bgs from './background2.jpg';

export class Cont3 extends React.Component {
  render() {
    return (
      <div>
        <div className="parallax-container valign-wrapper lighten-2">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h5 className="header col s12 light">
                  A modern responsive front-end framework based on Material
                  Design
                </h5>
              </div>
            </div>
          </div>
          <div className="parallax">
            <Parallax imageSrc={bgs} alt="Unsplashed background img 1" />
          </div>
        </div>
      </div>
    );
  }
}
