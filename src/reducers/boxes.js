import { CREATE_BOX, RETRIEVE_BOX } from '../actions/types'

const initialState = [];
function boxReducer(boxes = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_BOX:
      return [...boxes, payload];
    case RETRIEVE_BOX:
      return payload;
    default:
      return boxes;
  }
};
export default boxReducer;