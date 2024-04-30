import { inject, injectable, named } from "inversify";
import { User, IUserRepository, ISaySomething } from "./user.repository";
import { TYPES } from "../types";

export interface IUserService {
  getUser(): Promise<Array<User>>;
}

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(TYPES.IUserRepository)
    @named(TYPES.UserRepository)
    protected userRepository: IUserRepository & ISaySomething
  ) {
    this.userRepository = userRepository;
  }

  async getUser(): Promise<Array<User>> {
    console.log(this.userRepository.sayHello());
    return await this.userRepository.findAll();
  }
}
