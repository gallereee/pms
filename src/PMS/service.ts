import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";
import {
	CMD_POSTS_CREATE,
	CMD_POSTS_SET_DESCRIPTION,
	CreatePostDto,
	SetPostDescriptionDto,
} from "posts/dto";
import { PMS_SERVICE } from "PMS/constants";
import { Post } from "@gallereee/db-client";

@Injectable()
export class PMSService {
	constructor(@Inject(PMS_SERVICE) public PMS: ClientProxy) {}

	async createPost(data: CreatePostDto): Promise<Post> {
		return firstValueFrom(
			this.PMS.send<Post, CreatePostDto>({ cmd: CMD_POSTS_CREATE }, data)
		);
	}

	async setPostDescription(data: SetPostDescriptionDto): Promise<boolean> {
		return firstValueFrom(
			this.PMS.send<boolean, SetPostDescriptionDto>(
				{ cmd: CMD_POSTS_SET_DESCRIPTION },
				data
			)
		);
	}
}
