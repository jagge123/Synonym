import http from "./httpService";
import config from "../config.json";

let endpoint = config.endpointApi;

export function get(id) {
  return http.get(endpoint + "/" + id);
}

export function post(body) {
  return http.post(endpoint, body);
}
