import { Request } from 'express';

interface Ipermissions {
  getUsers: IgetUsers;
  getUser: IgetUser;
}

interface IgetUsers {
  all: Irole;
  read: Irole;
  write: Irole;
  Delete: Irole;
}
interface IgetUser {
  all: Irole;
  read: Irole;
  write: Irole;
  Delete: Irole;
}

interface Irole {
  [index: number]: string;
}

interface Iusers {
  traineeEmail: string;
  reviewerEmail: string;
}

interface IvalidUser {
  [index: number]: string;
}

interface User {
  id: string;
  name: string;
}

interface NewRequest extends Request {
  user: User;
}

export{ Ipermissions, IgetUsers, IgetUser, Iusers, IvalidUser, User, NewRequest };
