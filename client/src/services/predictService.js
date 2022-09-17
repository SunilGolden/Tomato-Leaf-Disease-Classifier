import httpService from "./httpService.js";
//import config from "../config.json";


export function predict(data) {
    return httpService.post(`${'/api'}/predict`, data);
}
