import { Controller } from "@nestjs/common";
import { PostsService } from "posts/service";
import { MessagePattern } from "@nestjs/microservices";
import {
	CMD_POSTS_CREATE,
	CMD_POSTS_SET_DESCRIPTION,
	CreatePostDto,
	SetPostDescriptionDto,
} from "posts/dto";
import { Post } from "@gallereee/db-client";

@Controller()
export class PostsController {
	constructor(private readonly postsService: PostsService) {}

	@MessagePattern({ cmd: CMD_POSTS_CREATE })
	async createPost(data: CreatePostDto): Promise<Post> {
		return this.postsService.createPost(data);
	}

	@MessagePattern({ cmd: CMD_POSTS_SET_DESCRIPTION })
	async setPostDescription(data: SetPostDescriptionDto): Promise<boolean> {
		await this.postsService.setPostDescription(data);

		return true;
	}
}
