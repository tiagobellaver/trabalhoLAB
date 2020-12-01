import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'
import ApiService from '../../utils/ApiService';

class HistoricoDetails extends Component {

    state = {
        historico: []
    };
    componentDidMount() {
        const id  = this.props.match.params.id;
        ApiService.Historico(id)
            .then(res => ApiService.TrataErros(res))
            .then(res => {
                console.log(res.historico);
                this.setState({ 
                    historico: res.historico
                });

            }).catch(err => console.log(err));
    }

    render() {
        const { historico} = this.state;
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col sm={2} md={2} lg={2} className="p-0 nav">
                            <Navbar />
                        </Col>
                        <Col sm={10} md={10} lg={10} className="p-0 main-context">
                            <div>
                                <h1 className="title-page">Detalhes do Histórico</h1>
                                <hr className="title-line"/>
                            </div>
                            <div className="padd-dash content-container">
                                <div className="access-card flex-line">
                                    <p className="p-text-title">Histórico </p>
                                    <p className="p-text-title">#{historico.id}</p>
                                </div>
                                <div className="user-details">
                                    <ul className="user-card-list">
                                        <li className="card-item">
                                            <p className="p-text-title">Data</p>
                                            <p className="p-text-value">{historico.date}</p>
                                        </li>
                                        <li className="card-item">
                                            <p className="p-text-title">Autorizado</p>
                                            <p className="p-text-value">{historico.autorizado ? ("Sim") : ("Não")}</p>
                                        </li>
                                        <li className="card-item">
                                            <p className="p-text-title">Dispositivo</p>
                                            <p className="p-text-value">
                                                <Link to={`/dispositivo/${historico.dispositivo_id}`}>{historico.dispositivo_apelido}</Link>
                                            </p>
                                        </li>
                                        <li className="card-item">
                                            <p className="p-text-title">Cartão</p>
                                            <p className="p-text-value">
                                                <Link to={`/cartao/${historico.cartao_id}`}>{historico.cartao_apelido}</Link>
                                            </p>
                                        </li>
                                        <li className="card-item">
                                            <p className="p-text-title">Usuário</p>
                                            <p className="p-text-value">
                                                <Link to={`/usuario/${historico.usuario_id}`}>{historico.usuario_nome}</Link>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="options-card">
                                    <p className="p-text-title">Ações</p>
                                    <div className="flex-line">
                                        <Link to="/historico" type="button" className="mrg-link p-text-value link-option">Voltar</Link>
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
export default HistoricoDetails;