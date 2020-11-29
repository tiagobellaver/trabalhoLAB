import React, { Component} from 'react';
import { Container, Row, Col, Table, Button } from 'reactstrap';

import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'
import ApiService from '../../utils/ApiService';

class UserCreate extends Component {

    state = {
        usuarios: [],
    };
    componentDidMount() {
        ApiService.ListaUsuarios()
        .then(res => ApiService.TrataErros(res))
        .then(res => { 
            console.log(res)
            this.setState({usuarios: res.usuarios}); 
        }).catch(err => console.log(err));

    }
     
render() {
    const { usuarios } = this.state;
    return(
    <>
    <Container fluid>
        <Row>
            <Col sm={2} md={2} lg={2} className="p-0 nav">
                <Navbar />
            </Col>
            <Col sm={10} md={10} lg={10} className="p-0 main-context">
                <h1 className="title-page">Usuários</h1>
                <hr className="title-line"/>
                <Col sm={10} md={10} lg={10} className="content-container">
                    
                </Col>
            </Col>
        </Row>
    </Container>
    </>
    );
}
}
export default UserCreate;