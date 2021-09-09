import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepository";

class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tags = tagsRepositories.find();

    return tags;
  }
}

export { ListTagsService };