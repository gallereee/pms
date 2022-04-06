import { Controller } from "@nestjs/common";
import { PostsService } from "posts/service";
import { MessagePattern } from "@nestjs/microservices";
import {
	CMD_POSTS_CREATE,
	CMD_POSTS_GET,
	CMD_POSTS_GET_ACCOUNT_POSTS,
	CMD_POSTS_SET_DESCRIPTION,
	CreatePostRequestDto,
	CreatePostResponseDto,
	GetAccountPostsRequestDto,
	GetAccountPostsResponseDto,
	GetPostRequestDto,
	GetPostResponseDto,
	SetPostDescriptionRequestDto,
	SetPostDescriptionResponseDto,
} from "posts/dto";

@Controller()
export class PostsController {
	constructor(private readonly postsService: PostsService) {}

	@MessagePattern({ cmd: CMD_POSTS_CREATE })
	async createPost(data: CreatePostRequestDto): Promise<CreatePostResponseDto> {
		return this.postsService.createPost(data);
	}

	@MessagePattern({ cmd: CMD_POSTS_SET_DESCRIPTION })
	async setPostDescription(
		data: SetPostDescriptionRequestDto
	): Promise<SetPostDescriptionResponseDto> {
		await this.postsService.setPostDescription(data);

		return true;
	}

	@MessagePattern({ cmd: CMD_POSTS_GET })
	async get({ id }: GetPostRequestDto): Promise<GetPostResponseDto> {
		return this.postsService.getWithPhotos(id);
	}

	@MessagePattern({ cmd: CMD_POSTS_GET_ACCOUNT_POSTS })
	async getAccountPosts({
		accountId,
	}: GetAccountPostsRequestDto): Promise<GetAccountPostsResponseDto> {
		return this.postsService.getAccountPosts(accountId);
	}
}
