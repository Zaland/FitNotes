import axios from "axios";

const axiosInstance = axios.create();

// export const addInterceptor = (getAccessTokenSilently: any) => {
//   axiosInstance.interceptors.request.use(async (config) => {
//     const token = await getAccessTokenSilently();
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   });
// };

export const Axios = axiosInstance;
