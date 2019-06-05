import config from "../../config/general";

export const loginApi = payload => {
  return fetch(`${config.apiEndpoint}auth/login`)
    .then(response => response.json())
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
    .then(response => response.json())
    .catch(e => ({e, error: true}));
};

