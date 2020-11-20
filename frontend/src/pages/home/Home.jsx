import React, { Component }  from 'react';
import { Container, Row, Col, Table  } from 'reactstrap';

import Navbar from '../../components/Navbar/Navbar';
import './home.css';

import ApiService from '../../utils/ApiService';

class Home extends Component{

    state = {
        historicos: [],
        cartoes: [],
    };

    componentDidMount() {
        ApiService.ListaCartoes()
        .then(res => ApiService.TrataErros(res))
        .then(res => {
            console.log(res)
            this.setState({cartoes: res.cartoes});
        }).catch(err => console.log(err));

        ApiService.ListaHistorico()
        .then(res => ApiService.TrataErros(res))
        .then(res => { 
            console.log(res)
            this.setState({historicos: res.historicos}); 
        }).catch(err => console.log(err));
    }

render() {
    const { historicos } = this.state;
    const { cartoes } = this.state;
    return(
<>
    <Container fluid>
        <Row>
            <Col sm={2} md={2} lg={2} className="p-0 nav">
                <Navbar />
            </Col>
            <Col sm={10} md={10} lg={10} className="p-0 main-context">
                <h1 className="title-page">Dashboard</h1>
                <hr className="title-line"/>
                <Col sm={10} md={10} lg={10} className="content-container d-flex">
                    <Col sm={6} md={6} lg={6}>
                    <Table>
                        <thead>
                            <tr>
                                <th>CARTÕES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartoes.map(cartao => (
                            <tr key={cartao.id}>
                                <td>{cartao.id}</td>
                                <td>{cartao.apelido}</td>
                                <td>1</td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                    </Col>
                    <Col sm={6} md={6} lg={6}>
                    <Table>
                        <thead>
                            <tr>
                                <th>HISTÓRICO</th>
                            </tr>
                        </thead>
                        <tbody>
                        {historicos.map(historico => (
                                 <tr  key={historico.id}>
                                    <td>{historico.id}</td>
                                    <td>a</td>
                                    <td>{historico.date}</td>
                                    <td>{historico.autorizado}</td>
                                 </tr>
                            ))}
                        </tbody>
                    </Table>
                    </Col>
                </Col>
            </Col>
        </Row>
    </Container>
</>
    );
}
}
export default Home;