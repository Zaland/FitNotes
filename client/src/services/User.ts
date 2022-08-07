import { Axios } from "./Axios";
import { Setting } from "../../../types";

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

  getSettings = (id: string) =>
    Axios.get(`${this.apiDomain}/user/${id}/settings`).then(
      (response) => response.data
    );

  updateSettings = (id: string, data: Setting) =>
    Axios.put(`${this.apiDomain}/user/${id}/settings`, { data });
}

export const UserService = new User();
