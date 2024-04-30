import { Container } from "inversify";
import { IUserService, UserService } from "../users/user.service";
import {
  AnotherUserRepository,
  IUserRepository,
  UserRepository,
} from "../users/user.repository";
import { TYPES } from "../types";

import "reflect-metadata";

const container = new Container();
container
  .bind<IUserService>(TYPES.IUserService)
  .to(UserService)
  .inSingletonScope();
container
  .bind<IUserRepository>(TYPES.IUserRepository)
  .to(AnotherUserRepository)
  .whenTargetNamed(TYPES.AnotherUserRepository);

/**
 * the concrete class can implement multiple interfaces
 * without specifying this in the binding
 * We just need to ensure that, when injecting this dependency,
 * the consuming class is aware that it might need to use method from
 * implemented interfaces
 */
container
  .bind<IUserRepository>(TYPES.IUserRepository)
  .to(UserRepository)
  .whenTargetNamed(TYPES.UserRepository);

export { container };
