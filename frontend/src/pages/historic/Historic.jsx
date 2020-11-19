import React, { Component} from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import './Historic.css';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'

import api from '../../utils/ApiService';
import ApiService from '../../utils/ApiService';

class Historic extends Component {

    constructor(props) {
        super(props);

        this.state = {
            historico: []
        };
    }

    componentDidMount() {
        ApiService.ListHistorico()
        .then(res => ApiService.TrataErros(res))
        .then(res => {
            if(res.message === 'success') {
                this.setState({historico: [...this.state.historico, ...res.data]});
            }
            console.log(res)
        })
    }

render() {
    const campos = [{
        id: 'id',
        apelido: '',
        data: 'date',
        status: 'autorizado'
    }]

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
                            <tr>
                                <td>{this.state.id}</td>
                                <td>{this.state.apelido}</td>
                                <td>{this.state.data}</td>
                                <td>{this.state.status}</td>
                                <td>
                                    <Link to="/historico-detalhe" type="button" className="link-option">Detalhes</Link>
                                </td>
                            </tr>
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