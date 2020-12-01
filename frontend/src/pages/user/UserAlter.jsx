import React, { Component } from 'react';
import { Container, Row, Col, Label} from 'reactstrap';
import { Formik, Form, Field , ErrorMessage} from 'formik';
import ApiService from '../../utils/ApiService';
import axios from 'axios';
import * as yup from 'yup';
class UserAlter extends Component {

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

    alterarUsuario= values => {
        console.log(values);
        axios.put(`http://localhost:8080/api/usuario/editar/${this.state.usuario.id}`, values)
            .then(resp => {
                console.log(resp);
            }).catch(err => console.log(err));
    }

    validations = yup.object().shape({
        nome: yup.string().required(),
        email: yup.string().email().required(),
        senha: yup.string().min(5).required()
    })

    render() {
        return (
            <>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6} className="login-container">
                            <Formik initialValues={{}} onSubmit={this.alterarUsuario} validationSchema={this.validations}>
                                <Form className="login-form">
                                    <Label className="label-login">Alterar Usuário</Label>
                                    
                                    <ErrorMessage component="span" name="nome" className="form-error"></ErrorMessage>
                                    <div className="forms-disp">
                                        <Label className="p-text-title" >Nome</Label>
                                        <Field name="nome" type="text" className="form-field"/>
                                    </div>

                                    <ErrorMessage component="span" name="email" className="form-error"></ErrorMessage>
                                    <div className="forms-disp">
                                        <Label className="p-text-title" >E-mail</Label>
                                        <Field name="email" type="text" className="form-field"/>
                                    </div>

                                    <ErrorMessage component="span" name="senha" className="form-error"></ErrorMessage>
                                    <div className="forms-disp">
                                        <Label className="p-text-title" >Senha</Label>
                                        <Field name="senha" type="password" className="form-field" />
                                    </div>
                                    
                                    <div className="form-group"  style={{marginTop: '20px'}}>
                                    <button className="login-button" type="submit">Alterar</button>
                                    </div>
                                </Form>
                            </Formik>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
export default UserAlter;