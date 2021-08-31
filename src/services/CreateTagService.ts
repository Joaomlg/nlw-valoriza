import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepository"

class CreateTagService {
  async execute(name: string) {
    if (!name) {
      throw new Error('Invalid tag');
    }

    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tagAlreadyExists = await tagsRepositories.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error('Tag already exists');
    }

    const tag = tagsRepositories.create({ name });

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService }