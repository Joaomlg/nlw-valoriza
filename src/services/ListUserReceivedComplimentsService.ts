import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { classToPlain } from "class-transformer";

class ListUserReceivedComplimentsService {
  async execute(user_id: string) {
    const complimplimentsRepositories = getCustomRepository(ComplimentsRepositories);

    const complimpliments = await complimplimentsRepositories.find({
      where: {
        user_receiver_id: user_id,
      },
      relations: ["userSender", "tag"]
    })

    return classToPlain(complimpliments);
  }
}

export { ListUserReceivedComplimentsService };