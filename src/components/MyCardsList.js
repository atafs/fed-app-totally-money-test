import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeCardById } from '../actions';

class MyCardsList extends Component {
    render() {
        return (
            <div>
                <h4>My Cards</h4>
                <ul className="list-group">
                    {
                        this.props.myCards.map(card => {
                            return (
                                <li key={card.id} className="list-group-item">
                                    <div className="list-item right-button"
                                         onClick={() => this.props.removeCardById(card.id)}
                                    >
                                        x
                                    </div>
                                    <p>{`APR: ${card.apr}`}</p>
                                    <p>{`Balance transfer: ${card.balance_transfer_offer_duration}`}</p>
                                    <p>{`Purchase: ${card.purchase_offer_duration}`}</p>
                                    <p>{`Credit: £${card.credit_available}`}</p>
                                
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        myCards: state.myCards
    }
}

export default connect(mapStateToProps, { removeCardById })(MyCardsList)
