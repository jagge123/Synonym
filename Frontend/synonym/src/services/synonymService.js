import http from "./httpService";
import config from "../config.json";

let endpoint = config.endpointApi;

export function get(keyword) {
  return http.get(endpoint + "/" + keyword);
}

export function post(body) {
  return http.post(endpoint, body);
}
