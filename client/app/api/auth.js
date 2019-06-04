import config from "../../config/general";

export const loginApi = payload => {
  console.log("Payload: ", payload);
  return fetch(`${config.apiEndpoint}auth/login`)
    .catch(e => ({e, error: true}));
};

export const registerApi = payload => {
  return fetch(`${config.apiEndpoint}auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
    .catch(e => ({e, error: true}));
};

