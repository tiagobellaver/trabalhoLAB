import React, { Component} from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import './Historic.css';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'
import ApiService from '../../utils/ApiService';

class Historic extends Component {

    state = {
        historicos: [],
    };
    componentDidMount() {
        ApiService.ListaHistorico()
        .then(res => ApiService.TrataErros(res))
        .then(res => { 
            console.log(res)
            this.setState({historicos: res.historicos}); 
        }).catch(err => console.log(err));

    }
     
render() {
    const { historicos } = this.state;
    return(
    <>
    <Container fluid>
        <Row>
            <Col sm={2} md={2} lg={2} className="p-0 nav">
                <Navbar />
            </Col>
            <Col sm={10} md={10} lg={10} className="p-0 main-context">
                <h1 className="title-page">Histórico</h1>
                <hr className="title-line"/>
                <Col sm={10} md={10} lg={10} className="content-container">
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>APELIDO</th>
                                <th>DATA</th>
                                <th>STATUS</th>
                                <th>AÇÕES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historicos.map(historico => (
                                 <tr  key={historico.id}>
                                    <td>{historico.id}</td>
                                    <td>a</td>
                                    <td>{historico.date}</td>
                                    <td>{historico.autorizado}</td>
                                    <td>
                                        <Link to="/historico-detalhe" type="button" className="link-option">Detalhes</Link>
                                    </td>
                                 </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Col>
        </Row>
    </Container>
    </>
    );
}
}
export default Historic;