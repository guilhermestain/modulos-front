import axios from "axios";
import { BACKEND_URL } from "./var";
import { store } from "../App";

export const NovoChipService = async values => {
  const storeObject = store.getState();

  const headers = {
    token: storeObject.auth.token,
    username: storeObject.auth.username
  };

  let response = {};

  await axios
    .post(`${BACKEND_URL}/api/chip`, values, { headers: headers })
    .then(resp => {
      response = resp;
    })
    .catch(error => {
      if (error.response) {
        response = error.response;
      } else {
        console.log("Error", error.message);
      }
    });
  return response;
};
