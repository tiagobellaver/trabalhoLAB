import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Image } from 'react-bootstrap';

import './card.css';

import CardIcon from '../../assets/card-icon.png';

import ApiService from '../../utils/ApiService';

class Card extends Component {

    state = {
        cartoes: [],
    };

    componentDidMount() {
        ApiService.ListaCartoes()
            .then(res => ApiService.TrataErros(res))
            .then(res => {
                console.log(res)
                this.setState({ cartoes: res.cartoes });
            }).catch(err => console.log(err));

    }

    render() {

        const { cartoes } = this.state;

        return (
            <>
                <Col sm={12} md={12} lg={12} className="card-container d-flex">

                    <Col sm={6} md={6} lg={6} className="card-icon">
                        <Image src={CardIcon} fluid />
                    </Col>


                    <Col sm={6} md={6} lg={6}>
                        {cartoes.map(cartao => (
                            <tr key={cartao.id}>
                                <td>
                                    {cartao.id}
                                </td>
                                <td>{cartao.apelido}</td>
                            </tr>
                        ))}

                    </Col>

                </Col>
            </>
        );
    }
}

export default Card;