import React  from 'react';
import { Container, Row, Col, Table} from 'reactstrap';

import Navbar from '../../components/Navbar/Navbar';

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
                    <h3>Trabalho desenvolvido para a máteria de Laboratório de Desenvolvimento</h3>
                    <p>Acadêmicos: Giovani Meneguel, Letícia May e Tiago Bellaver</p>
                    <p>Tema do Trabalho: Sistema de Segurança utilizando Tecnologia RFID</p>
                    <p>Descrição do problema: Criação de um sistema de segurança para acesso a determinado lugar com níveis de segurança/acesso. Utilizando um
                    cartão com RFID será possível criar níveis de acesso para determinados usuários.</p>
                    <p>Objetivos: - Criação de uma interface que mostre quem é o usuário que está passando pelo sistema de segurança;</p>
                    <p>Determinar níveis de segurança diferentes para os usuários, permitindo ou não (ou até limitando o tempo de acesso) o acesso para o usuário;</p>
                    <p>Emitir alertas caso um usuário tente repetidas vezes acessar um local que não tem acesso.</p>
                    <p>Escopos:</p>
                    <p>- Prototipagem da interface;</p>
                    <p>- Interface de gerenciamento para cadastro, alteração e exclusão de usuários;</p>
                    <p>- Cadastro de usuários com diferentes níveis de acesso;</p>
                    <p>- Configuração de pelo menos duas tags RFID</p>
                    <p>Ferramentas e materiais a serem utilizados: </p>
                    <p>- Kit RFID;</p>
                    <p>- Kit Arduino;</p>
                    <p>- Software Arduino IDE;</p>
                    <p>Metodologia</p>
                    <p>No primeiro momento será feito uma pesquisa para melhorar nosso conhecimento sobre a tecnologia RFID, após a pesquisa seria determinado o que cada um de
                    nós iríamos pesquisar e desenvolver para o trabalho. Após isso será criado um repositório no Github para que cada um dos membros disponibilize seu código desenvolvido.
                    Por último será realizado uma série de testes para verificar a integridade e segurança de nosso sistema.</p>
                    <p>	As disciplinas que iremos utilizar são Banco de Dados, Linguagem de programação, Tópicos Especiais em Computação I - A, Interação Humano - Computador, Fisica Aplicada
                    a Computação, entre outros aspectos importantes de outras disciplinas não citadas.</p>
                    <p>Cronograma e divisão de tarefas:</p>
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