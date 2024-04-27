import { Request, Response } from "express";
import { IUserService } from "./user.service";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { Autobind } from "../utils/autobind";

@Autobind()
@injectable()
export class UserController {
  protected name = "Kimsang";
  constructor(@inject(TYPES.IUserService) private userService: IUserService) {}

  async getAllUsers(req: Request, res: Response) {
    const users = await this.userService.getUser();
    res.json(users);
  }
}
