import { Controller } from "@nestjs/common";
import { PhotosService } from "photos/service";
import { MessagePattern } from "@nestjs/microservices";
import {
	CMD_PHOTOS_GET_PHOTO_FILE_URL,
	GetPhotoFileUrlRequestDto,
	GetPhotoFileUrlResponseDto,
} from "photos/dto";

@Controller()
export class PhotosController {
	constructor(private readonly photosService: PhotosService) {}

	@MessagePattern({ cmd: CMD_PHOTOS_GET_PHOTO_FILE_URL })
	async getPhotoFileUrl({
		id,
	}: GetPhotoFileUrlRequestDto): Promise<GetPhotoFileUrlResponseDto> {
		return this.photosService.getPhotoFileUrl(id);
	}
}
