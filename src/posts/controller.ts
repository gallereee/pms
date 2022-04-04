import { Controller } from "@nestjs/common";
import { PostsService } from "posts/service";
import { MessagePattern } from "@nestjs/microservices";
import { CMD_POSTS_CREATE, CreatePostDto } from "posts/dto";
import { Post } from "@gallereee/db-client";

@Controller()
export class PostsController {
	constructor(private readonly postsService: PostsService) {}

	@MessagePattern({ cmd: CMD_POSTS_CREATE })
	async createPost(data: CreatePostDto): Promise<Post> {
		return this.postsService.createPost(data);
	}
}
