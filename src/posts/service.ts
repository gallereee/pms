import { Injectable } from "@nestjs/common";
import {
	AccountPost,
	CreatePostRequest,
	SetPostDescriptionRequest,
} from "posts/dto";
import { Account, Photo, Post, Prisma } from "@gallereee/db-client";
import { PrismaService } from "prisma/service";
import PhotoCreateWithoutPostInput = Prisma.PhotoCreateWithoutPostInput;

@Injectable()
export class PostsService {
	constructor(private readonly prisma: PrismaService) {}

	async createPost(data: CreatePostRequest): Promise<Post> {
		const { photos, accountId } = data;

		const photosToCreate: PhotoCreateWithoutPostInput[] = photos.map(
			({ width, height, file, order }) => ({
				width,
				height,
				file: { create: file },
				order,
			})
		);

		return this.prisma.post.create({
			data: { accountId, photos: { create: photosToCreate } },
		});
	}

	async setPostDescription(data: SetPostDescriptionRequest): Promise<void> {
		const { postId, description } = data;

		await this.prisma.post.update({
			where: { id: postId },
			data: { description },
		});
	}

	async getWithPhotos(
		id: Post["id"]
	): Promise<(Post & { photos: Photo[] }) | null> {
		return this.prisma.post.findUnique({
			where: { id },
			include: { photos: { orderBy: { order: "asc" } } },
		});
	}

	async getAccountPosts(accountId: Account["id"]): Promise<AccountPost[]> {
		const posts = await this.prisma.post.findMany({
			where: { accountId },
			include: { photos: { orderBy: { order: "asc" } } },
			orderBy: { createdAt: "desc" },
		});

		return posts.map((post) => ({
			id: post.id,
			coverPhotoId: post.photos[0].id,
		}));
	}
}
