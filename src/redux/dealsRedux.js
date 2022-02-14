/* selectors */
export const getAll = ({ deals }) => deals;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
