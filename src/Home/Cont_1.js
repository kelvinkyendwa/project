import React from 'react';

// content object

const content = [
  {
    icon: 'flash_on',
    title: 'First Item',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a neque viverra, facilisis nisl sit amet, porttitor elit. Donec vitae tempus dolor. Integer vel eros lorem. Vivamus id nulla felis. Duis ac dictum diam. Mauris a scelerisque risus, eget congue augue. Ut suscipit ac lorem quis aliquam. Fusce lacinia nulla id '
  },
  {
    icon: 'group',
    title: 'Second Item',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a neque viverra, facilisis nisl sit amet, porttitor elit. Donec vitae tempus dolor. Integer vel eros lorem. Vivamus id nulla felis. Duis ac dictum diam. Mauris a scelerisque risus, eget congue augue. Ut suscipit ac lorem quis aliquam. Fusce lacinia nulla id '
  },
  {
    icon: 'settings',
    title: 'Third Item',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus a neque viverra, facilisis nisl sit amet, porttitor elit. Donec vitae tempus dolor. Integer vel eros lorem. Vivamus id nulla felis. Duis ac dictum diam. Mauris a scelerisque risus, eget congue augue. Ut suscipit ac lorem quis aliquam. Fusce lacinia nulla id '
  }
];

export class Cont1 extends React.Component {
  render() {
    const con_1 = content[0];
    const con_2 = content[1];
    const con_3 = content[2];
    return (
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">{con_1.icon}</i>
                </h2>
                <h5 className="center">{con_1.title}</h5>

                <p className="light">{con_1.body}</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">{con_2.icon}</i>
                </h2>
                <h5 className="center">{con_2.title}</h5>

                <p className="light">{con_2.body}</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">{con_3.icon}</i>
                </h2>
                <h5 className="center">{con_3.title}</h5>

                <p className="light">{con_3.body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
