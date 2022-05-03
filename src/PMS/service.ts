import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";
import {
	CMD_POSTS_CREATE,
	CMD_POSTS_DELETE,
	CMD_POSTS_GET,
	CMD_POSTS_GET_ACCOUNT_POSTS,
	CMD_POSTS_SET_DESCRIPTION,
	CreatePostRequestDto,
	DeletePostRequestDto,
	DeletePostResponseDto,
	GetAccountPostsRequestDto,
	GetAccountPostsResponseDto,
	GetPostRequestDto,
	GetPostResponseDto,
	SetPostDescriptionRequestDto,
} from "posts/dto";
import { PMS_SERVICE } from "PMS/constants";
import { Post } from "@gallereee/db-client";
import {
	CMD_PHOTOS_GET_PHOTO_FILE_URL,
	GetPhotoFileUrlRequestDto,
	GetPhotoFileUrlResponseDto,
} from "photos/dto";

@Injectable()
export class PMSService {
	constructor(@Inject(PMS_SERVICE) public PMS: ClientProxy) {}

	async createPost(data: CreatePostRequestDto): Promise<Post> {
		return firstValueFrom(
			this.PMS.send<Post, CreatePostRequestDto>({ cmd: CMD_POSTS_CREATE }, data)
		);
	}

	async deletePost(data: DeletePostRequestDto): Promise<DeletePostResponseDto> {
		return firstValueFrom(
			this.PMS.send<DeletePostResponseDto, DeletePostRequestDto>(
				{ cmd: CMD_POSTS_DELETE },
				data
			)
		);
	}

	async setPostDescription(
		data: SetPostDescriptionRequestDto
	): Promise<boolean> {
		return firstValueFrom(
			this.PMS.send<boolean, SetPostDescriptionRequestDto>(
				{ cmd: CMD_POSTS_SET_DESCRIPTION },
				data
			)
		);
	}

	async getPhotoFileUrl(
		data: GetPhotoFileUrlRequestDto
	): Promise<GetPhotoFileUrlResponseDto> {
		return firstValueFrom(
			this.PMS.send<GetPhotoFileUrlResponseDto, GetPhotoFileUrlRequestDto>(
				{ cmd: CMD_PHOTOS_GET_PHOTO_FILE_URL },
				data
			)
		);
	}

	async getPost(data: GetPostRequestDto): Promise<GetPostResponseDto> {
		return firstValueFrom(
			this.PMS.send<GetPostResponseDto, GetPostRequestDto>(
				{ cmd: CMD_POSTS_GET },
				data
			)
		);
	}

	async getAccountPosts(
		data: GetAccountPostsRequestDto
	): Promise<GetAccountPostsResponseDto> {
		return firstValueFrom(
			this.PMS.send<GetAccountPostsResponseDto, GetAccountPostsRequestDto>(
				{ cmd: CMD_POSTS_GET_ACCOUNT_POSTS },
				data
			)
		);
	}
}
