import { Axios } from "./Axios";

class Auth {
  signin = (email: string, password: string) =>
    Axios.post(`${process.env.REACT_APP_API_DOMAIN}/auth/signin`, {
      formFields: [
        { id: "email", value: email },
        { id: "password", value: password },
      ],
    });
}

export const AuthService = new Auth();
