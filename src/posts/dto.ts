import { TCPRequestCommon, TCPRequestWithAccountId } from "types";
import { Photo, Post } from "@gallereee/db-client";
import { CreateFileDto } from "files/dto";

const CMD_POSTS_CREATE = "posts/create";
const CMD_POSTS_SET_DESCRIPTION = "posts/setDescription";

interface CreatePostPhoto {
	width: Photo["width"];
	height: Photo["height"];
	file: CreateFileDto;
}

interface CreatePostDto extends TCPRequestCommon, TCPRequestWithAccountId {
	photos: CreatePostPhoto[];
}

interface SetPostDescriptionData {
	postId: Post["id"];
	description: string;
}
interface SetPostDescriptionDto
	extends TCPRequestCommon,
		SetPostDescriptionData {}

export { CMD_POSTS_CREATE, CMD_POSTS_SET_DESCRIPTION };
export type { CreatePostDto, SetPostDescriptionData, SetPostDescriptionDto };
