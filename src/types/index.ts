import { Account, Post, Photo } from "@gallereee/db-client";

interface TCPRequestWithAccountId {
	accountId: Account["id"];
}

interface TCPRequestCommon {
	requestId: string;
}

type RequestDto<Data> = Data & TCPRequestCommon;

export { TCPRequestCommon, TCPRequestWithAccountId };
export type { Post, Photo, RequestDto };
