import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
import { UserRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, password, admin = false } : IUserRequest) {
    const usersRepository = getCustomRepository(UserRepositories);

    if (!email) {
      throw new Error("Invalid email");
    }

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({ 
      name, 
      admin,
      email, 
      password: passwordHash
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };