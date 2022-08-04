import { Axios } from "./Axios";

class Auth {
  private apiDomain: string;

  constructor() {
    this.apiDomain = process.env.REACT_APP_API_DOMAIN || "";
  }

  signin = (email: string, password: string) =>
    Axios.post(`${this.apiDomain}/auth/signin`, {
      formFields: [
        { id: "email", value: email },
        { id: "password", value: password },
      ],
    });

  signup = (email: string, password: string) =>
    Axios.post(`${this.apiDomain}/auth/signup`, {
      formFields: [
        { id: "email", value: email },
        { id: "password", value: password },
      ],
    });

  emailExists = (email: string) =>
    Axios.get(`${this.apiDomain}/auth/signup/email/exists`, {
      params: { email },
    });
}

export const AuthService = new Auth();
