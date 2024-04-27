import { inject, injectable } from "inversify";
import { User, UserRepository, IUserRepository } from "./user.repository";
import { TYPES } from "../types";

export interface IUserService {
  getUser(): Promise<Array<User>>;
}

@injectable()
export class UserService implements IUserService {
  protected userRepository: UserRepository;

  constructor(@inject(TYPES.IUserRepository) userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async getUser(): Promise<Array<User>> {
    return await this.userRepository.findAll();
  }
}
