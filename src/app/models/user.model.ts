import {Role} from "./role.num";

export class User {
  id: number | undefined;
  username: string = '';
  password: string = '';
  name: string = '';
  token: string = '';
  role: Role = Role.USER;
}
