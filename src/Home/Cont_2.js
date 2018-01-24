import React from 'react';

export class Cont2 extends React.Component {
  render() {
    return (
      <div>
        <div className="parallax-container valign-wrapper cyan">
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
            <img src="background2.jpg" alt="Unsplashed background img 2" />
          </div>
        </div>

        <div className="parallax-container valign-wrapper  cyan lighten-2">
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
            <img src="background3.jpg" alt="Unsplashed background img 3" />
          </div>
        </div>
      </div>
    );
  }
}
