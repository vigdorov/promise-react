export interface IData {
  data: IUser;
}

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export class User {
  public id: number;
  public email: string;
  public firstName: string;
  public lastName: string;
  public avatar: string;

  constructor () {
    this.id = -1;
    this.email = '';
    this.firstName = '';
    this.lastName = '';
    this.avatar = '';
  }
}
