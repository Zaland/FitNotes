import axios from "axios";
import Session from "supertokens-auth-react/recipe/session";

const axiosInstance = axios.create();

Session.addAxiosInterceptors(axiosInstance);

export const Axios = axiosInstance;
