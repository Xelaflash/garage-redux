export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const CAR_CREATED = 'CAR_CREATED';
export const REMOVE_CAR = 'REMOVE_CAR';

const BASE_URL = 'https://wagon-garage-api.herokuapp.com';


export function fetchCars() {
  // AJAX request
  const promise = fetch("https://wagon-garage-api.herokuapp.com/scep-garage/cars")
  .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function removeCar(history, car) {
  const url = `${BASE_URL}/cars/${car.id}`;
  fetch(url, { method: 'DELETE' })
    .then(r => r.json())
    .then(() => history.push(""));

  return {
    type: REMOVE_CAR,
    payload: car
  };
}


export function createCar(garage, car, callback) {
  const url = `${BASE_URL}/scep-garage/cars`;
  const request = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  }).then(r => r.json())
    .then(() => callback());

  return {
    type: CAR_CREATED,
    payload: request
  };
}


export function fetchCar(id) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/scep-garage/cars/${id}`)
    .then(response => response.json());

  return {
    type: FETCH_CAR,
    payload: promise
  };
}
