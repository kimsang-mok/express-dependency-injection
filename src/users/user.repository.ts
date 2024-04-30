import { injectable } from "inversify";

export interface User {
  id: number;
  name: string;
}

export interface IUserRepository {
  findAll(): Promise<Array<User>>;
  add(user: User): Promise<User>;
}

export interface ISaySomething {
  sayHello(): string;
}

@injectable()
export class UserRepository implements IUserRepository, ISaySomething {
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

  sayHello(): string {
    return "Hello";
  }
}

@injectable()
export class AnotherUserRepository implements IUserRepository {
  async findAll(): Promise<Array<User>> {
    return [
      {
        id: 3,
        name: "Messi",
      },
      { id: 4, name: "Ronaldo" },
    ];
  }

  add(user: User): Promise<User> {
    return Promise.resolve(user);
  }
}
