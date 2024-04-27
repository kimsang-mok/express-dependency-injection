import { Container } from "inversify";
import { IUserRepository, User } from "./user.repository";
import { UserService } from "./user.service";
import { TYPES } from "../types";

const mockUserRepository = {
  findAll: jest.fn(),
  add: jest.fn(),
};

describe("UserService", () => {
  let users: Array<User>;
  let userService: any;

  beforeEach(() => {
    // directly inject to simplify the setup
    userService = new UserService(mockUserRepository as any);

    // or setup DI container
    /*
    const container = new Container();
    container
      .bind<IUserRepository>(TYPES.IUserRepository)
      .toConstantValue(mockUserRepository);
    userService = container.resolve(UserService);
    */

    users = [
      { id: 1, name: "TestUser 1" },
      { id: 2, name: "TestUser 2" },
    ];

    // mock implementation
    mockUserRepository.findAll.mockResolvedValue(users);
  });

  it("should return all users", async () => {
    const result = await userService.getUser();
    expect(result).toEqual(users);
    expect(mockUserRepository.findAll).toHaveBeenCalled();
  });
});
