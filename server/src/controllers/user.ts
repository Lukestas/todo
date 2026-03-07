import type { Request, Response } from 'express';
import { UserModel } from '../models/user.js';
export class UserController {
  static async create(req: Request, res: Response) {
    const { name, password }: { name: string; password: string } = req.body;
    if (!name || !password) {
      return res.status(400).json({
        message: 'Debe ingresar un nombre/contraseña para crear el usuario',
      });
    }
    const newUser = await UserModel.create({ name, password });
    return res
      .status(201)
      .json({ Location: `http://localhost:1234/api/users?id=${newUser.id}` });
  }

  static async getById(req: Request, res: Response) {
    const id = req.query.id as string;
    if (!id) {
      return res.status(400).json({ message: 'Se requiere un identificador' });
    }
    const user = await UserModel.getById({ id });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    return res.status(200).json({ user: user });
  }

  /* static async getAll(_req: Request, res: Response) {
    const users = await UserModel.getAll();
    if (!users) {
      return res
        .status(404)
        .json({ message: "Los usuarios no fueron encontrados" });
    }
    return res.status(200).json({ users: users });
  } */
}
