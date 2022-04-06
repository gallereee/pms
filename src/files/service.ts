import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/service";
import { File, FileProvider } from "@gallereee/db-client";
import config from "config";
import { FileTelegramData } from "files/dto";
import axios from "axios";
import { TelegramGetFileResponse, TelegramResponse } from "types/telegram";
import { RpcException } from "@nestjs/microservices";

@Injectable()
export class FilesService {
	constructor(private readonly prisma: PrismaService) {}

	private static async getTelegramFileUrl({ data }: File): Promise<string> {
		const { fileId } = data as FileTelegramData;
		const generatePathUrl = `${
			config().telegramBotBaseUrl
		}getFile?file_id=${fileId}`;

		const { data: response } = await axios.get<
			TelegramResponse<TelegramGetFileResponse>
		>(generatePathUrl);

		if (response.ok === false) {
			throw new RpcException(response.description);
		}

		const {
			result: { file_path: filePath },
		} = response;

		return config().telegramBotFilesBaseUrl + filePath;
	}

	async getFileUrl(id: File["id"]): Promise<string> {
		const file = await this.prisma.file.findUnique({
			where: {
				id,
			},
		});

		const { provider } = file;

		switch (provider) {
			case FileProvider.TELEGRAM: {
				return FilesService.getTelegramFileUrl(file);
			}
			default: {
				throw new RpcException("File provider is not found");
			}
		}
	}
}
