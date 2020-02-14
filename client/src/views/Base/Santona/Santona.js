import React, {Component} from 'react';
import {Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';

class Santona extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }

  lorem() {
    return 'Kintu ami ki korbo tmi bolo vaiya.tmk to nijeke control korte hobe. Tumi amr kach theke kosto chara kichui paba na. R ami tmk kosto dite parbo na. Amr nijer kachei khup kharap lage. Tumi amon ta koro na plz. Tumi chailei sob somvob vaiya. Manlam koekdin kharap lagbe kintu pore dhakba sob thik hoye jabe. R ami wisky ba cgaret naki je tumi din din efection hoye jacho. Tumi ki boka naki. Amon ta koro na sudu sudu nije kosto paccho. Amr to kharap lage. Je kau amr jonno kosto pacche. Amr to gillty feel hoi. Manlam ami asob Believe kori na kintu tai bole ki amr mon nai amr kosto ba kharap lage na. Amro to lage. Tai tmr valor jonno bolche tumi vul poth theke ber hoye jao plz amr request'
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }

  tabPane() {
    return (
      <>
        <TabPane tabId="1">
          {`1. ${this.lorem()}`}
        </TabPane>
        <TabPane tabId="2">
          {`2. ${this.lorem()}`}
        </TabPane>
        <TabPane tabId="3">
          {`3. ${this.lorem()}`}
        </TabPane>
      </>
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="10" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
                  Home
                </NavLink>
              </NavItem>
     
            </Nav>
            <TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>
          </Col>
  


        </Row>
      </div>
    );
  }
}

export default Santona;
