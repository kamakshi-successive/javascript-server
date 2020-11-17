export interface IUser {
  traineeEmail: string;
  reviewerEmail: string;
}

type access = {
  all: string[];
  read: string[];
  write: string[];
  Delete: string[];
};

export interface  IPermission {
  getUsers: access ;
  getUser: access;
}

