import React from 'react';

export class Footer extends React.Component {
  changeName() {
    alert('My name changes');
  }
  render() {
    return (
      <footer className="page-footer black">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text" onClick={this.changeName}>
                Kelvin Mitau
              </h5>
              <p className="grey-text text-lighten-4">
                We are a team of college students working on this project like
                its our full time job.
              </p>
            </div>

            <div className="col l3 s12">
              <h5 className="white-text">Ydrissl</h5>
              <ul>
                <li>
                  <a className="white-text" href="#!">
                    Hoffenheim
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Yodenheim
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Asgard
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Space
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Go Social</h5>
              <ul>
                <li>
                  <a className="white-text" href="#!">
                    Github
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            Made by{' '}
            <a
              className="brown-text text-lighten-3"
              href="https://kelvinkyendwa.github.com"
            >
              Materialize and React
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
