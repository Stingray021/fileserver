import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    // 'Access-Control-Allow-Origin': "http://localhost:3000",
    // 'Access-Control-Allow-Credentials': 'true',
    // 'Origin': "http://localhost:3000"
  },
  withCredentials: true,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    // 'Access-Control-Allow-Origin': "http://localhost:3000",
    // 'Access-Control-Allow-Credentials': 'true',
    // 'Origin': "http://localhost:3000"
  },
  withCredentials: true,
  credentials: "include",
});

// const interceptor = function(config){
//     config.headers['Access-Control-Allow-Origin'] = "http://localhost:3000"
//     config.headers['Origin'] = "http://localhost:3000"
//     return config
// }
// $authHost.interceptors.request.use(interceptor)
// $host.interceptors.request.use(interceptor)

export { $host, $authHost };
