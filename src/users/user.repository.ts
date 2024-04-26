import { Service } from "typedi";

interface User {
  id: number;
  name: string;
}

@Service()
export class UserRepository {
  async findAll(): Promise<User[]> {
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
