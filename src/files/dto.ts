import { FileProvider, Prisma } from "@gallereee/db-client";

import JsonObject = Prisma.JsonObject;

interface CreateFileTelegramData extends JsonObject {
	fileId: string;
}

interface CreateFileTelegram {
	provider: typeof FileProvider.TELEGRAM;
	data: CreateFileTelegramData;
}

type CreateFileDto = CreateFileTelegram;

export type { CreateFileDto };
export { FileProvider };
