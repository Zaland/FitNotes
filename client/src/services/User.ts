import { Axios } from "./Axios";

class User {
  private apiDomain: string;

  constructor() {
    this.apiDomain = process.env.REACT_APP_API_DOMAIN || "";
  }

  createUser = (
    id: string,
    email: string,
    firstName: string,
    lastName: string
  ) => Axios.post(`${this.apiDomain}/user`, { id, email, firstName, lastName });
}

export const UserService = new User();
