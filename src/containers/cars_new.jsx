import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { createCar } from '../actions';

const required = value => value ? undefined : 'Required';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, () => {
      this.props.history.push('/'); // Navigate after submit
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <label htmlFor="brand">Brand</label>
          <Field
            label="Brand"
            name="brand"
            type="text"
            component="input"
          />
          <label htmlFor="model">Model</label>
          <Field
            className="form-control"
            label="Model"
            name="model"
            type="text"
            component="input"
          />
          <label htmlFor="owner">Owner</label>
          <Field
            className="form-control"
            label="Owner"
            name="owner"
            type="text"
            component="input"
          />
          <label htmlFor="plate">Plate</label>
          <Field
            className="form-control"
            label="Plate"
            name="plate"
            type="text"
            component="input"
          />
          <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>
            Add car
          </button>
        </form>
        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({
  form: 'newCarForm' // a unique identifier
})(
  connect(mapStateToProps, { createCar })(CarsNew)
);
