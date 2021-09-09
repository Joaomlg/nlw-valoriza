import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserReceivedComplimentsService {
  async execute(user_id: string) {
    const complimplimentsRepositories = getCustomRepository(ComplimentsRepositories);

    const complimpliments = await complimplimentsRepositories.find({
      where: {
        user_receiver_id: user_id,
      },
      relations: ["userSender", "tag"]
    })

    return complimpliments;
  }
}

export { ListUserReceivedComplimentsService };