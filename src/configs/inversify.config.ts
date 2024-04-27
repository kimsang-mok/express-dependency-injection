import { Container } from "inversify";
import { IUserService, UserService } from "../users/user.service";
import { IUserRepository, UserRepository } from "../users/user.repository";
import { TYPES } from "../types";

import "reflect-metadata";

const container = new Container();
container
  .bind<IUserService>(TYPES.IUserService)
  .to(UserService)
  .inSingletonScope();
container
  .bind<IUserRepository>(TYPES.IUserRepository)
  .to(UserRepository)
  .inSingletonScope();

export { container };
