import { Inject, Service } from "typedi";
import { UserRepository } from "./user.repository";
import { Request, Response } from "express";

@Service()
class UserController {
  private userRepository: UserRepository;

  constructor(
    @Inject((type) => UserRepository) usersRepository: UserRepository
  ) {
    console.log(usersRepository);
    this.userRepository = usersRepository;
  }

  //   async getAllUsers() {
  //     return await this.userRepository.findAll();
  //   }
  async getAllUsers(req: Request, res: Response) {
    const result = await this.userRepository.findAll();
    res.status(200).json(result);
  }
}

export default UserController;
