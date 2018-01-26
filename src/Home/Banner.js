import React from 'react';
import bg1 from './background1.jpg';
import { Button, Icon, Parallax } from 'react-materialize';

const bgd =
  'http://piermonkey.com/wp-content/uploads/2016/03/Dollarphotoclub_99956429-e1457722404630-1000x600.jpg';
export class Banner extends React.Component {
  render() {
    var toastHTML =
      '<span>I am toast content</span><button class="btn-flat toast-action">Undo</button>';
    return (
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
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

            <div className="row center">
              <br />
              <br />
              <a
                onClick="M.toast({html: toastHTML})"
                href="/Home"
                id="download-button"
                className="btn-large waves-effect waves-light teal lighten-1"
              >
                Get Started
              </a>
            </div>
            <br />
            <br />
          </div>
        </div>
        <Parallax imageSrc={bg1} alt="Unsplashed background img 1" />
      </div>
    );
  }
}
