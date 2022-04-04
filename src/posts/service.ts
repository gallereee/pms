import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "posts/dto";
import { Post, Prisma } from "@gallereee/db-client";
import { PrismaService } from "prisma/service";
import PhotoCreateWithoutPostInput = Prisma.PhotoCreateWithoutPostInput;

@Injectable()
export class PostsService {
	constructor(private readonly prisma: PrismaService) {}

	async createPost(data: CreatePostDto): Promise<Post> {
		const { photos, accountId } = data;

		const photosToCreate: PhotoCreateWithoutPostInput[] = photos.map(
			({ width, height, file }) => ({ width, height, file: { create: file } })
		);

		return this.prisma.post.create({
			data: { accountId, photos: { create: photosToCreate } },
		});
	}
}
