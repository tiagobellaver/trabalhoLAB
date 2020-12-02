import React ,{ Component}   from 'react';
import { Link } from 'react-router-dom'
import {Container, Row, Col } from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar';
import { Image } from 'react-bootstrap';

import ApiService from '../../utils/ApiService';

class cardDetails extends Component {
    state = {
        usuarios: [],
    };
    componentDidMount() {
<<<<<<< Updated upstream
        ApiService.ListaUsuarios()
        .then(res => ApiService.TrataErros(res))
        .then(res => { 
            console.log(res)
            this.setState({usuarios: res.usuarios}); 
        }).catch(err => console.log(err));

=======
        const id = this.props.match.params.id;
        var dispostivo_s;

        ApiService.Dispositivo(id)
            .then(res => ApiService.TrataErros(res))
            .then(res => {
                dispostivo_s = res.dispositivo;

                ApiService.CartaoDispositivo(id)
                    .then(res => ApiService.TrataErros(res))
                    .then(res => {
                        this.setState({
                            dispositivo: dispostivo_s,
                            cartoes: res.cartoes
                        });
                    }).catch(err => console.log(err));

                ApiService.Cartao(id)
                    .then(res => ApiService.TrataErros(res))
                    .then(res => {
                        this.setState({
                            dispositivo: dispostivo_s,
                            cartoes: res.cartoes
                        });
                    }).catch(err => console.log(err));


            }).catch(err => console.log(err));
    }

    excluirCartao = () => {
        axios.delete(`http://localhost:8080/api/cartao/deletar/${this.state.cartoes.id}`)
            .then(resp => {
                window.location.reload();
            }).catch(err => console.log(err));
    }

    render() {

        const { dispositivo, cartoes } = this.state;

        return (
            <>
                <Container fluid>
                    <Row>
                        <Col sm={2} md={2} className="p-0 nav">
                            <Navbar />
                        </Col>
                        <Col Col sm={10} md={10} className="p-0 main-context">
                            <div>
                                <h1 className="title-page">CARTÕES</h1>
                                <hr className="title-line" />
                            </div>
                            <div className="padd-dash content-container">
                                <div className="access-card flex-line">
                                    <p className="p-text-title">#{cartoes.id}</p>
                                </div>
                                <Container>
                                    <Row className="user-details">
                                        <Col Col>
                                            <Image src="https://img.ibxk.com.br/materias/5866/21592.jpg?w=328" fluid />
                                        </Col>
                                        <Col Col >
                                            <ul className="user-card-list">
                                                <li className="card-item">
                                                    <p className="p-text-title">Nome do usuário</p>
                                                    <p className="p-text-value">Zé</p>
                                                </li>
                                                <li className="card-item">
                                                    <p className="p-text-title">E-mail</p>
                                                    <p className="p-text-value">ze@seuze</p>
                                                </li>
                                                <li className="card-item">
                                                    <p className="p-text-title">Apelido do dispositvo</p>
                                                    <p className="p-text-value">{cartoes.apelido}</p>
                                                </li>
                                                <li className="card-item">
                                                    <p className="p-text-title">Autorizado</p>
                                                    <p className="p-text-value">Sim</p>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Container>
                                <div className="options-card">
                                    <p className="p-text-title">Ações</p>
                                    <div className="flex-line">
                                        <Link to="/cartao" type="button" className="p-text-value mrg-link link-option">Voltar</Link>
                                    </div>
                                    <Formik initialValues={{}} onSubmit={this.excluirCartao}>
                                        <Form>
                                            <Link to="/cartao"><button className="delete-button" type="submit">Excluir Registro</button></Link>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
>>>>>>> Stashed changes
    }
        
render() {
    
    return(
    <>
   <Container fluid>
        <Row>
            <Col sm={2} md={2} className="p-0 nav">
                <Navbar />
            </Col>
            <Col Col sm={10} md={10} className="p-0 main-context">
                <div>
                    <h1 className="title-page">CARTÕES</h1>
                    <hr className="title-line"/>
                </div>     
                <div className="padd-dash content-container">
                    <div className="access-card flex-line">
                        <p className="p-text-title">Cartão do seu zé</p> 
                    </div>
                    <Container>
                        <Row className="user-details">
                            <Col Col>
                                <Image src="https://img.ibxk.com.br/materias/5866/21592.jpg?w=328" fluid/>
                            </Col>
                            <Col Col >
                                <ul className="user-card-list">
                                    <li className="card-item">
                                        <p className="p-text-title">Nome do usuário</p>
                                        <p className="p-text-value">Zé</p>
                                    </li>
                                    <li className="card-item">
                                        <p className="p-text-title">E-mail</p>
                                        <p className="p-text-value">ze@seuze</p>
                                    </li>
                                    <li className="card-item">
                                        <p className="p-text-title">Apelido do dispositvo</p>
                                        <p className="p-text-value">Cartão do seu ze</p>
                                    </li>
                                    <li className="card-item">
                                        <p className="p-text-title">Status</p>
                                        <p className="p-text-value">Ativo</p>
                                    </li>
                                    <li className="card-item">
                                        <p className="p-text-title">Autorizado</p>
                                        <p className="p-text-value">Sim</p>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                    <div className="options-card">
                        <p className="p-text-title">Ações</p>
                        <div className="flex-line">
                            <Link to="/cartoes" type="button" className="p-text-value mrg-link link-option">Voltar</Link>
                            <Link to="/cartoes" type="button" className="p-text-value link-option ">Excluir Registro</Link>
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
export default cardDetails;
