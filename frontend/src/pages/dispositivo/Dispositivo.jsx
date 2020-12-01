import React, { Component} from 'react';
import { Container, Row, Col, Table } from 'reactstrap';

import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'
import ApiService from '../../utils/ApiService';

class User extends Component {

    state = {
        dispositivos: [],
    };
    componentDidMount() {
        ApiService.ListaDispositivos()
        .then(res => ApiService.TrataErros(res))
        .then(res => { 
            console.log(res)
            this.setState({dispositivos: res.dispositivos}); 
        }).catch(err => console.log(err));

    }
     
render() {
    const { dispositivos } = this.state;
    return(
    <>
    <Container fluid>
        <Row>
            <Col sm={2} md={2} lg={2} className="p-0 nav">
                <Navbar />
            </Col>
            <Col sm={10} md={10} lg={10} className="p-0 main-context">
                <h1 className="title-page">Dispositivos</h1>
                <hr className="title-line"/>
                <Col sm={10} md={10} lg={10} className="content-container">
                    <Link to="/dispositivo/cadastrar"><button className="new-card" style={{margin: '10px'}} >+ Novo Dispositivo</button></Link>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>APELIDO</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {dispositivos.map(dispositivo => (
                                 <tr  key={dispositivo.id}>
                                    <td>{dispositivo.id}</td>
                                    <td>{dispositivo.apelido}</td>
                                    <td>
                                        <Link to={`/dispositivo/${dispositivo.id}`} type="button" className="link-option">Detalhes</Link>
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