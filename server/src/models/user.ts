import type { IUser } from '../types/user.js';

const users: IUser[] = [];
export class UserModel {
  static async create({ name, password }: { name: string; password: string }) {
    const newUser: IUser = { id: crypto.randomUUID(), name, password };
    users.push(newUser);
    return newUser;
  }

  static async getById({ id }: { id: string }) {
    const user: IUser | undefined = users.find((user) => user.id == id);
    return user;
  }

  /* static async getAll() {
    return users;
  } */
}
