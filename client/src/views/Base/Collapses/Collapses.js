import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Fade, Row } from 'reactstrap';

class Collapses extends Component {

  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 300,
    };
  }

  onEntering() {
    this.setState({ status: 'Opening...' });
  }

  onEntered() {
    this.setState({ status: 'Opened' });
  }

  onExiting() {
    this.setState({ status: 'Closing...' });
  }

  onExited() {
    this.setState({ status: 'Closed' });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  }

  toggleCustom(tab) {

    const prevState = this.state.custom;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      custom: state,
    });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Vaiya Dakta is boaring</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/collapse/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">DonGi Rani</small>
                  </a>
                </div>
              </CardHeader>
              <Collapse isOpen={this.state.collapse} onEntering={this.onEntering} onEntered={this.onEntered} onExiting={this.onExiting} onExited={this.onExited}>
                <CardBody>
            
                  <p>
                  Vaiya abar barabari hoye jache kiss e cole e geso tumi matha gorom hoye gechilo tai gali dichi sorry but i will kill u
                  Sorry vaiya jei boka kaichi ami r jiboneo phn dorbo na. Aj mone hoi kotha bolte parbo na. Tobe line thako sujok pele fake fake khotha bolbo but gumai porle bye bolbo jate wait na koro. Ok vaiya
                  </p>
                </CardBody>
              </Collapse>
              <CardFooter>
                <Button color="primary" onClick={this.toggle} className={'mb-1'} id="toggleCollapse1">Show</Button>
                <hr/>
               
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Moha Rani Amar Jonno Doya korse</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/fade/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">Dong</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <Fade timeout={this.state.timeout} in={this.state.fadeIn} tag="h5" className="mt-3">
                Kano amon korcho. Tumi onak valo may paba inshallah. Ami doya kori.she tmk amr thake besi valobashbe sukhe rakhbe.tumio take onak valobaseba
                </Fade>
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={this.toggleFade} id="toggleFade1">Hide</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Bal Dakhta sunte amar ato valo lage</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/fade/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">Dong</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <Fade timeout={this.state.timeout} in={this.state.fadeIn} tag="h5" className="mt-3">
                Bal bal bal bal ache tmr
                Ami akta bal tmi tar thekeo boro bal
                </Fade>
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={this.toggleFade} id="toggleFade1">Hide</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Collapse <small>accordion</small>
                <div className="card-header-actions">
                  <Badge>NEW</Badge>
                </div>
              </CardHeader>
              <CardBody>
                <div id="accordion">
                  <Card className="mb-0">
                    <CardHeader id="headingOne">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h5 className="m-0 p-0">Pain Fall SMS</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                      <CardBody>
                      Acha dhoro school thake asar potha amr accident hoye gelo r ami futtu mane koborer tole thokhon mone koro ami akta sopno chilam akhon ghom venge gese taholei to hoi.mono koro ami nai. ব্যাস somossa ses no problem
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingTwo">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                        <h5 className="m-0 p-0">Babu Ta Sorir Khub Kharap</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                      <CardBody>
                      Ami osustho sorirta valo na khup karap lagche. Bed theke utte parchi na. Tumi khotayValo lagche na. Ammu chole gese basai eka pore ache. Washroom jaoyer komota nai. But msg korar komota ache😂😂😂😂😂😂😂😂😂😂😂😂
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingThree">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <h5 className="m-0 p-0">Babu Seta Abar ki</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                      <CardBody>
                      Babu babu bondho koro i m seriou. Ok na kai naiDekho tumi amk Niye sopno dekha bondo koro. Tmr ai sopno vangbe dam sure.konodin puron hobe na
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Collapse <small>custom accordion</small>
                <div className="card-header-actions">
                  <Badge>NEW</Badge>
                </div>
              </CardHeader>
              <CardBody>
                <div id="exampleAccordion" data-children=".item">
                  <div className="item">
                    <Button className="m-0 p-0" color="link" onClick={() => this.toggleCustom(0)} aria-expanded={this.state.custom[0]} aria-controls="exampleAccordion1">
                      Ai text Gulo amk khub pain dei
                    </Button>
                    <Collapse isOpen={this.state.custom[0]} data-parent="#exampleAccordion" id="exampleAccordion1">
                      <p className="mb-3">
                      Jani na are pagol tention koro na akhon aktu valo lagche.ami thik ache tamon kichu hoi nai.bikale karal obostha chilo.now i am feeling good.tumi kmn acho? Thik acho to?
                      </p>
                    </Collapse>
                  </div>
                  <div className="item">
                    <Button className="m-0 p-0" color="link" onClick={() => this.toggleCustom(1)} aria-expanded={this.state.custom[1]} aria-controls="exampleAccordion2">
                      Angree
                    </Button>
                    <Collapse isOpen={this.state.custom[1]} data-parent="#exampleAccordion" id="exampleAccordion2">
                      <p className="mb-3">
                      Khobordar kono msg korar try vuleo korba na. Tmi ajk limit cross kore felso. Onk hoiche r na. Akta na tuita na 5. 5 ta kiss diso tmi ami onk koste nije k control korchi na abar tarupor tmi bar bar churi dicchila ami churita chalai nai tmr kopal valo. Tmi amr onk boro tmk somman kortam bole tmr gaye hat uthai te amr bebe k lagche bujcho
                      Ajk er por amr arokom kora ki amr savabik na. Ami kolponao kori nai. Ami vabchi Khali tmi mukhe bolo but ajk onk kichu korcho
                      </p>
                    </Collapse>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Collapses;
