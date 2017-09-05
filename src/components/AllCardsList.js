import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCardById } from '../actions';

class AllCardsList extends Component {
    render() {
      console.log('this.props', this.props);
        return (
            <div>
                <h4>All Cards</h4>
                <ul className="list-group">
                    {
                        this.props.allCards.map(card => {
                            return (
                                <li key={card.id} className="list-group-item">
                                    <div className="list-item right-button"
                                         onClick={() => this.props.addCardById(card.id)} >
                                        +
                                    </div>
                                    <div className="list-item">{card.name}</div>
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
        allCards: state.allCards
    };
}

export default connect(mapStateToProps, { addCardById })(AllCardsList);
