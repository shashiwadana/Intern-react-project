import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDeals } from '../../actions/DealsActions'

class ReduxTest extends Component {

    constructor(props) {
        super(props);
    }

    //Intial Action And Fetch Server Side Data To Store
    static initialAction() {
        return fetchDeals();
    }

    render() {
        const deal = this.props.deal.dealsReducer.deals.deals;
        console.log('=====');
        console.log(deal);

        const dealHtml = deal.map((d, i) => {
            //console.log(d,i);
            return  <div>{d.title}</div>
        });

        return (
            <div>
                <h1>test redux store....
                        {dealHtml}

                </h1>
            </div>
        );
    }
}

//Map employee Reducer and asign value to employee
const mapStateToProps = state => ({
    deal: state
});

export default connect(mapStateToProps)(ReduxTest);
