import { TCPRequestCommon, TCPRequestWithAccountId } from "types";
import { Photo } from "@gallereee/db-client";
import { CreateFileDto } from "files/dto";

const CMD_POSTS_CREATE = "posts/create";

interface CreatePostPhoto {
	width: Photo["width"];
	height: Photo["height"];
	file: CreateFileDto;
}

interface CreatePostDto extends TCPRequestCommon, TCPRequestWithAccountId {
	photos: CreatePostPhoto[];
}

export { CMD_POSTS_CREATE };
export type { CreatePostDto };
