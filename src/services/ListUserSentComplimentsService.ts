import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { classToPlain } from "class-transformer";

class ListUserSentComplimentsService {
  async execute(user_id: string) {
    const complimplimentsRepositories = getCustomRepository(ComplimentsRepositories);

    const complimpliments = await complimplimentsRepositories.find({
      where: {
        user_sender_id: user_id
      },
      relations: ["userReceiver", "tag"]
    })

    return classToPlain(complimpliments);
  }
}

export { ListUserSentComplimentsService };