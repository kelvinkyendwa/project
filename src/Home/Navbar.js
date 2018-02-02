import React from 'react';

export class Navbar extends React.Component {
  render() {
    const navlinks = [
      {
        title: 'home',
        link: '#home'
      },
      {
        title: 'about',
        link: '#about'
      },
      {
        title: 'contact',
        link: '#contact'
      }
    ];
    return (
      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="/" className="brand-logo">
            React DOM
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="/Home">Home</a>
            </li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li>
              <a href="/home">Navbar Link</a>
            </li>
          </ul>
          <a href="/Home" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    );
  }
}
