import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { removeCar } from '../actions';

class CarsShow extends Component {
  handleClick = () => {
    this.props.removeCar(this.props.history, this.props.car);
  }

  render() {
    if (!this.props.car) {
      return <p>Searching the car in the garage...</p>;
    }

    return (
      <div>
        <div className="post-item">
          <h3>{this.props.car.brand} {this.props.car.model}</h3>
          <p>{this.props.car.owner}</p>
          <p>{this.props.car.plate}</p>
        </div>
        <button className="delete" onClick={this.handleClick}>
          Delete
        </button>
        <br />
        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);
  return {
    car: state.cars.find(car => car.id === id),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeCar }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarsShow));
