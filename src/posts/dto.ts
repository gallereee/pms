import { RequestDto } from "types";
import { Account, Photo, Post } from "@gallereee/db-client";
import { CreatePostPhoto } from "photos/dto";

const CMD_POSTS_CREATE = "posts/create";
const CMD_POSTS_DELETE = "posts/delete";
const CMD_POSTS_SET_DESCRIPTION = "posts/setDescription";
const CMD_POSTS_GET = "posts/get";
const CMD_POSTS_GET_ACCOUNT_POSTS = "posts/getAccountPosts";

// CreatePost

interface CreatePostRequest {
	accountId: Account["id"];
	photos: CreatePostPhoto[];
}
type CreatePostRequestDto = RequestDto<CreatePostRequest>;
type CreatePostResponseDto = Post;

// DeletePost

interface DeletePostRequest {
	id: Post["id"];
}
type DeletePostRequestDto = RequestDto<DeletePostRequest>;
type DeletePostResponseDto = null;

// SetPostDescription

interface SetPostDescriptionRequest {
	postId: Post["id"];
	description: string;
}
type SetPostDescriptionRequestDto = RequestDto<SetPostDescriptionRequest>;
type SetPostDescriptionResponseDto = boolean;

// GetPost

interface GetPostRequest {
	id: Post["id"];
}
type GetPostRequestDto = RequestDto<GetPostRequest>;
type GetPostResponseDto = (Post & { photos: Photo[] }) | null;

// GetAccountPosts

interface GetAccountPostsRequest {
	accountId: Account["id"];
}
interface AccountPost {
	id: Post["id"];
	coverPhotoId: Photo["id"];
}
type GetAccountPostsRequestDto = RequestDto<GetAccountPostsRequest>;
type GetAccountPostsResponseDto = AccountPost[];

export {
	CMD_POSTS_CREATE,
	CMD_POSTS_DELETE,
	CMD_POSTS_SET_DESCRIPTION,
	CMD_POSTS_GET,
	CMD_POSTS_GET_ACCOUNT_POSTS,
};
export type {
	CreatePostRequest,
	CreatePostRequestDto,
	CreatePostResponseDto,
	DeletePostRequest,
	DeletePostRequestDto,
	DeletePostResponseDto,
	SetPostDescriptionRequest,
	SetPostDescriptionRequestDto,
	SetPostDescriptionResponseDto,
	GetPostRequestDto,
	GetPostResponseDto,
	AccountPost,
	GetAccountPostsRequestDto,
	GetAccountPostsResponseDto,
};
