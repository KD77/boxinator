import {
  CREATE_BOX,
  RETRIEVE_BOX,
} from "./types";

import BoxDataService from "../service/boxes.service";

export const createBox = (name, weight, color, country, price) => async (dispatch) => {
  try {
    const res = await BoxDataService.create({ name, weight, color, country, price });
    dispatch({
      type: CREATE_BOX,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};


export const retrieveBox = () => async (dispatch) => {
  try {
    const res = await BoxDataService.getAll();
    dispatch({
      type: RETRIEVE_BOX,
      payload: res.data,
    });
    console.log(res.data); // printing thhe data in action/boxes.js
  } catch (err) {
    console.log(err);
  }
};



