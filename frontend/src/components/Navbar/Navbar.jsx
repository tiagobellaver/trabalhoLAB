import React  from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { Image } from 'react-bootstrap';

import Dashboard from '../../assets/dashboard.svg'
import Cards from '../../assets/credit-card.svg';
import Historic from '../../assets/history.svg';
import Information from '../../assets/info.svg';
import Logout from '../../assets/logout.svg';

export default props =>
<>
    <Container fluid>
        <Row>
            <Col className="p-0 nav">
                <Col className="p-0">
                    <h2 className="nav-title">Menu</h2>
                    <hr style={{borderColor: 'white'}} className="p-0"/>
                    
                    <Nav className="navbar-left">
                        <NavItem>
                            <NavLink href="/"><Image src={Dashboard} />Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/cartoes"><Image src={Cards} />Cartões</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/historico"><Image src={Historic} />Histórico</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/sobre"><Image src={Information} />Informações</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/login"><Image src={Logout} />Sair</NavLink>
                        </NavItem>
                    </Nav>
                </Col>
            </Col>
        </Row>
    </Container>
</>