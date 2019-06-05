import config from "../../config/general";

export const getCatsApi = payload => {
  return fetch(`${config.apiEndpoint}cats?authToken=${payload.authToken}`)
    .then(response => response.json())
    .catch(e => ({e, error: true}));
};

