import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';


class CategoryContainer extends React.Component {

  state = {
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  getStateAndHelpers() {
    return {
      categories: this.props.categories,
      error: this.props.error
    };
  }

  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}

const mapStateToProps = state => ({
  categories: state.category.items,
  error: state.category.error,
});

export default connect(mapStateToProps, { fetchCategories })(CategoryContainer);
