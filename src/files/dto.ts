import { FileProvider, Prisma } from "@gallereee/db-client";

interface FileTelegramData extends Prisma.JsonObject {
	fileId: string;
}

interface CreateFileTelegram {
	provider: typeof FileProvider.TELEGRAM;
	data: FileTelegramData;
}

type CreateFileData = CreateFileTelegram;

export type { FileTelegramData, CreateFileData };
export { FileProvider };
