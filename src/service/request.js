import axios from "axios";

import { BaseURL } from "./config";

const instance = axios.create({
    baseURL: BaseURL,
})


export default instance;