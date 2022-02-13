/* action name creator */
const reducerName = 'viewport';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const UPDATE_VIEWPORT = createActionName('UPDATE_VIEWPORT');

/* action creators */
export const updateViewport = payload => ({ payload, type: UPDATE_VIEWPORT });

const viewportReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_VIEWPORT:
      return action.payload;
    default:
      return statePart;
  }
};

export default viewportReducer;
