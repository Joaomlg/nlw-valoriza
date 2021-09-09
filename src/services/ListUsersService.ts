import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";

class ListUsersService {
  async execute() {
    const usersRepositories = getCustomRepository(UserRepositories);

    const users = usersRepositories.find();

    return classToPlain(users);
  }
}

export { ListUsersService };