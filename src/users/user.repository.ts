import { injectable } from "inversify";

export interface User {
  id: number;
  name: string;
}

export interface IUserRepository {
  findAll(): Promise<Array<User>>;
  add(user: User): Promise<User>;
}

@injectable()
export class UserRepository implements IUserRepository {
  async findAll(): Promise<Array<User>> {
    return [
      {
        id: 1,
        name: "Kimsang",
      },
      {
        id: 2,
        name: "Kafka",
      },
    ];
  }

  async add(user: User) {
    return Promise.resolve(user);
  }
}
