import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="post-item">
            <h3>{car.brand} {car.model}</h3>
            <p>{car.owner}</p>
            <p>{car.plate}</p>
          </div>
        </Link>);
    });
  }
  render() {
    return (
      <div>
        <div className="first-row">
          <Link className="btn btn-primary btn-cta" to="/cars/new">
            Lets register a new car!
          </Link>
        </div>
        {this.renderCars()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
