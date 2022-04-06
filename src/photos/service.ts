import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/service";
import { Photo } from "@gallereee/db-client";
import { FilesService } from "files/service";

@Injectable()
export class PhotosService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly filesServise: FilesService
	) {}

	async getPhotoFileUrl(photoId: Photo["id"]): Promise<string> {
		const { fileId } = await this.prisma.photo.findUnique({
			where: { id: photoId },
		});

		return this.filesServise.getFileUrl(fileId);
	}
}
