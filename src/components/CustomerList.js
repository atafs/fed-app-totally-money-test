import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectCustomer } from '../actions'
import '../styles/index.css';


class CustomerList extends Component {

    renderList() {
        console.log('this.props customers', this.props);
        return this.props.customers.map((customer) => {
            return (
                <ul key={customer.id}>
                  <li className="customer-list"
                      onClick={() => this.props.selectCustomer(customer)} >
                    <div className="list-item customer-item">
                        { `${customer.first_name} ${customer.last_name}` }
                    </div>

                  </li>
                </ul>

            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        customers: state.customers
    };
}

export default connect(mapStateToProps, { selectCustomer })(CustomerList);
