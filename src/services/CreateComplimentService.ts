import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UserRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
  tag_id: string;
  user_sender_id: string;
  user_receiver_id: string;
  message: string;
}

class CreateComplimentService {
  async execute({ tag_id, user_sender_id, user_receiver_id, message } : IComplimentRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const userRepositories = getCustomRepository(UserRepositories);

    if (user_sender_id === user_receiver_id) {
      throw new Error("User cannot send himself compliment")
    }

    const userReceiverExists = await userRepositories.findOne(user_receiver_id);

    if (!userReceiverExists) {
      throw new Error("User receiver does not exists")
    }

    const compliment = complimentsRepositories.create({ tag_id, user_sender_id, user_receiver_id, message });

    await complimentsRepositories.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };