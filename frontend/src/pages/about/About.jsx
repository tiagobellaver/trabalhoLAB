import React  from 'react';
import { Container, Row, Col, Table} from 'reactstrap';

import Navbar from '../../components/Navbar/Navbar';
import './About.css';

export default props =>
<>
    <Container fluid>
        <Row>
            <Col sm={2} md={2} lg={2} className="p-0 nav">
                <Navbar />
            </Col>
            <Col sm={10} md={10} lg={10} className="p-0 main-context">
                <h1 className="title-page">Sobre</h1>
                <hr className="title-line"/>
                <Col sm={10} md={10} lg={10} className="content-container">
                    <h3 className="title-about">Trabalho desenvolvido para a máteria de Laboratório de Desenvolvimento</h3>
                    <p className="text-about"><span className="sub-about">Acadêmicos:</span> <a href="https://github.com/GioAM">Giovani Meneguel</a>, <a href="https://github.com/leticiapmay99">Letícia May</a> e <a href="https://github.com/tiagobellaver">Tiago Bellaver</a></p>
                    <p className="text-about"><span className="sub-about">Tema do Trabalho:</span> Sistema de Segurança utilizando Tecnologia RFID</p>
                    <p className="text-about"><span className="sub-about">Descrição do problema:</span> Criação de um sistema de segurança para acesso a determinado lugar com níveis de segurança/acesso. Utilizando um
                    cartão com RFID será possível criar níveis de acesso para determinados usuários.</p>
                    <p className="sub-about">Objetivos:</p>
                    <p className="text-about">- Criação de uma interface que mostre quem é o usuário que está passando pelo sistema de segurança;</p>
                    <p className="text-about">- Determinar níveis de segurança diferentes para os usuários, permitindo ou não (ou até limitando o tempo de acesso) o acesso para o usuário;</p>
                    <p className="text-about">- Emitir alertas caso um usuário tente repetidas vezes acessar um local que não tem acesso.</p>
                    <p className="sub-about">Escopos:</p>
                    <p className="text-about">- Prototipagem da interface;</p>
                    <p className="text-about">- Interface de gerenciamento para cadastro, alteração e exclusão de usuários;</p>
                    <p className="text-about">- Cadastro de usuários com diferentes níveis de acesso;</p>
                    <p className="text-about">- Configuração de pelo menos duas tags RFID</p>
                    <p className="sub-about">Ferramentas e materiais a serem utilizados: </p>
                    <p className="text-about">- Kit RFID;</p>
                    <p className="text-about">- Kit Arduino;</p>
                    <p className="text-about">- Software Arduino IDE;</p>
                    <p className="sub-about">Metodologia</p>
                    <p className="text-about">No primeiro momento será feito uma pesquisa para melhorar nosso conhecimento sobre a tecnologia RFID, após a pesquisa seria determinado o que cada um de
                    nós iríamos pesquisar e desenvolver para o trabalho. Após isso será criado um repositório no Github para que cada um dos membros disponibilize seu código desenvolvido.
                    Por último será realizado uma série de testes para verificar a integridade e segurança de nosso sistema.</p>
                    <p className="text-about">	As disciplinas que iremos utilizar são Banco de Dados, Linguagem de programação, Tópicos Especiais em Computação I - A, Interação Humano - Computador, Fisica Aplicada
                    a Computação, entre outros aspectos importantes de outras disciplinas não citadas.</p>
                    <p className="sub-about">Cronograma de tarefas:</p>
                    <Table>
                        <thead>
                            <tr>
                                <td>Data</td>
                                <td>Descrição</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>26/08/2020</td>
                                <td>Compra dos hardware necessário</td>
                            </tr>
                            <tr>
                                <td>02/09/2020</td>
                                <td>Pesquisa inicial do assunto</td>
                            </tr>
                            <tr>
                                <td>09/09/2020</td>
                                <td>nício da Interface e modelagem do banco</td>
                            </tr>
                            <tr>
                                <td>23/09/2020</td>
                                <td>Pesquisa teórica</td>
                            </tr>
                            <tr>
                                <td>23/09/2020</td>
                                <td>Modelagem do Arduino</td>
                            </tr>
                            <tr>
                                <td>07/10/2020</td>
                                <td>Desenvolvimento da interface</td>
                            </tr>
                            <tr>
                                <td>07/10/2020</td>
                                <td>CDesenvolvimento do artigo</td>
                            </tr>
                            <tr>
                                <td>21/10/2020</td>
                                <td>Mandar e receber dados do Arduino</td>
                            </tr>
                            <tr>
                                <td>21/10/2020</td>
                                <td>Mandar e receber dados do Arduino</td>
                            </tr>
                            <tr>
                                <td>04/11/2020</td>
                                <td>Disponibilizar dados na Interface</td>
                            </tr>
                            <tr>
                                <td>18/11/2020</td>
                                <td>Desenvolvimento do artigo</td>
                            </tr>
                            <tr>
                                <td>02/12/2020</td>
                                <td>Entrega Final</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Col>
        </Row>
    </Container>
</>