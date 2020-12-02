import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';

import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'
import ApiService from '../../utils/ApiService';

class User extends Component {

    state = {
        usuarios: [],
    };
    componentDidMount() {
        ApiService.ListaUsuarios()
            .then(res => ApiService.TrataErros(res))
            .then(res => {
                this.setState({ usuarios: res.usuarios });
            }).catch(err => console.log(err));

    }

    render() {
        const { usuarios } = this.state;
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col sm={2} md={2} lg={2} className="p-0 nav">
                            <Navbar />
                        </Col>
                        <Col sm={10} md={10} lg={10} className="p-0 main-context">
                            <h1 className="title-page">Usuários</h1>
                            <hr className="title-line" />
                            <Col sm={10} md={10} lg={10} className="content-container">
                                <Link to="/novo-usuario"><button className="new-card" style={{margin: '10px'}} >+ Novo Usuário</button></Link>
                                <Table>
                                    <thead> 
                                        <tr>
                                            <th>ID</th>
                                            <th>E-MAIL</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {usuarios.map(usuario => (
                                            <tr  key={usuario.id}>
                                                <td>{usuario.id}</td>
                                                <td>{usuario.email}</td>
                                                <td>
                                                    <Link to={`/usuario/${usuario.id}`} type="button" className="link-option">Detalhes</Link>
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
export default User;