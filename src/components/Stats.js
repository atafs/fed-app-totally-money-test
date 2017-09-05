import React, { Component } from 'react';
import { connect } from 'react-redux';

class Stats extends Component {
  credit_available() {
    let credit_available = 0;
    this.props.myCards.forEach(card => credit_available += card.credit_available);
    return credit_available;
  }

  render() {
    const overallCredit = this.credit_available();
    if (overallCredit === 0) {
      return <div><h4>Stats</h4></div>;
    }

    return (
      <div>
        <h4>Stats</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Overall Credit:</strong> {overallCredit}
          </li>
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

export default connect(mapStateToProps, null)(Stats);
