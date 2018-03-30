import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {

  render() {
    if (!this.props.book) {
      return <div>Please select a book</div>
    }
    return (
      <div className="col-sm-4">
        {this.props.book.title}
      </div>
    )
  }
}

function mapStateToProps(state) {
  // state contains book list and active books
  return {
    book: state.selectedBook
  };
}

export default connect(mapStateToProps)(BookDetails);
