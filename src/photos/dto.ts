import { Photo } from "@gallereee/db-client";
import { CreateFileData } from "files/dto";
import { RequestDto } from "types";

const CMD_PHOTOS_GET_PHOTO_FILE_URL = "photos/getPhotoFileUrl";

interface CreatePostPhoto {
	width: Photo["width"];
	height: Photo["height"];
	order: Photo["order"];
	file: CreateFileData;
}

// GetFileUrl

interface GetPhotoFileUrlRequest {
	id: Photo["id"];
}
type GetPhotoFileUrlRequestDto = RequestDto<GetPhotoFileUrlRequest>;
type GetPhotoFileUrlResponseDto = string;

export type {
	CreatePostPhoto,
	GetPhotoFileUrlRequestDto,
	GetPhotoFileUrlResponseDto,
};
export { CMD_PHOTOS_GET_PHOTO_FILE_URL };
