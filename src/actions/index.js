export const FETCH_CARS = 'FETCH_CARS';

export function fetchCars() {
  // AJAX request
  const promise = fetch("https://wagon-garage-api.herokuapp.com/scep-garage/cars")
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}
