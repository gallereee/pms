import { Account } from "@gallereee/db-client";

interface TCPRequestWithAccountId {
	accountId: Account["id"];
}

interface TCPRequestCommon {
	requestId: string;
}

export { TCPRequestCommon, TCPRequestWithAccountId };
