import { Service } from "typedi";

@Service()
export class UserService {
  getUser(): string {
    return "Here is the list of users: ";
  }
}
