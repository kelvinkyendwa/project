import React from 'react';
import bg1 from './background1.jpg';
const bgd =
  'http://piermonkey.com/wp-content/uploads/2016/03/Dollarphotoclub_99956429-e1457722404630-1000x600.jpg';
export default class Banner extends React.Component {
  render() {
    return (
      <div>
        <div className="section no-pad-bot black">
          <div className="container">
            <br />
            <br />
            <h1 className="header center cyan-text text-lighten-2">
              React Project
            </h1>
            <div className="row center">
              <h5 className="header col s12 white-text light">
                Recreated a Material Theme using React JS
              </h5>
            </div>

            <br />
          </div>
        </div>
      </div>
    );
  }
}
