import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../styles/index.css';

class CustomerDetail extends Component {
    render() {
        if (!this.props.activeCustomer) {
            return (<div>Select a user...</div>);
        }
        return (
            <div className="customer-list">
                <div className="list-item customer-item">
                    { `${this.props.activeCustomer.title} ${this.props.activeCustomer.first_name} ${this.props.activeCustomer.last_name} ` }
                    { ` was born in ${this.props.activeCustomer.date_of_birth}.` }
                    { ` The annual income is £${this.props.activeCustomer.annual_income}` }
                    { ` and it is currently employed as ${this.props.activeCustomer.employment_status}.` }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeCustomer: state.activeCustomer
    };
}

export default connect(mapStateToProps)(CustomerDetail);
