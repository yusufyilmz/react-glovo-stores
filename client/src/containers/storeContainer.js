import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { fetchStore, filterStores } from '../actions';

let searchTimeout;

class StoreContainer extends Component {

    state = {
    }

    componentDidMount() {
        if (this.props.categories.length > 0) {
            this.props.fetchStore(this.props.type);
        }
    }

    filterHandleChange = (text, type) => {
        this.setState({ text }, () => {
            if (searchTimeout !== undefined) clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                if (text) {
                    this.props.filterStores(text, type);
                }
                else {
                    this.props.fetchStore(this.props.type);
                }
            }, 400);
        });
    }

    getStateAndHelpers() {
        return {
            stores: this.props.stores,
            filterHandleChange: this.filterHandleChange,
            error: this.props.error
        };
    }

    render() {

        if (this.props.categories.length === 0) {
            return <Redirect to={`/category`} />
        }

        return this.props.children(this.getStateAndHelpers());
    }
}

const mapStateToProps = state => ({
    stores: state.store.items,
    categories: state.category.items,
    error: state.store.error
});

export default connect(mapStateToProps, { fetchStore, filterStores })(StoreContainer);
