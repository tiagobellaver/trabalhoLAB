import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Formik, Form} from 'formik';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'
import ApiService from '../../utils/ApiService';
import axios from 'axios';

class UserDetails extends Component {

    state = {
        usuario: [],
    };

    componentDidMount() {
        const id  = this.props.match.params.id;
        ApiService.Usuario(id)
            .then(res => ApiService.TrataErros(res))
            .then(res => {
                this.setState({ 
                    usuario: res.usuario,
                });
            }).catch(err => console.log(err));

    }

    excluirUsuario = values => {
        axios.delete(`http://localhost:8080/api/usuario/deletar/${this.state.usuario.id}`)
<<<<<<< Updated upstream
        .then(resp => {
            console.log(resp);
        })
=======
        .then(resp => {}).catch(err => console.log(err));
>>>>>>> Stashed changes
    }

    render() {
        const { usuario } = this.state;
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col sm={2} md={2} lg={2} className="p-0 nav">
                            <Navbar />
                        </Col>
                        <Col sm={10} md={10} lg={10} className="p-0 main-context">
                            <div>
                                <h1 className="title-page">Detalhes do Usuário</h1>
                                <hr className="title-line"/>
                            </div>   
                                
                                <div className="padd-dash content-container">
                                    <div className="access-card flex-line">
                                        <p className="p-text-title">Usuário </p>
                                        <p className="p-text-title">#{usuario.id}</p>
                                    </div>

                                    <div className="user-details">
                                    
                                        <p className="p-text-title">Nome</p>
                                        <p className="p-text-value">{usuario.nome}</p>
                                        <p className="p-text-title">E-mail</p>
                                        <p className="p-text-value">{usuario.email  }</p>
                                    </div>
                                    <div className="options-card">
                                        <p className="p-text-title">Ações</p>
                                        <div className="flex-line">
                                            <Link to="/usuario" type="button" className="mrg-link p-text-value link-option">Voltar</Link>
                                            <Link to={`/usuario/alterar/${usuario.id}`} type="button" className="mrg-link p-text-value link-option">Alterar Registro</Link>
                                            <Formik initialValues={{}} onSubmit={this.excluirUsuario}>
                                                <Form>
                                                    <button className="delete-button" type="submit">Excluir Registro</button>
                                                </Form>
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                           
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
export default UserDetails;