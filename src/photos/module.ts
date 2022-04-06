import { Module } from "@nestjs/common";
import { PhotosService } from "photos/service";
import { PhotosController } from "photos/controller";
import { PrismaModule } from "prisma/module";
import { FilesModule } from "files/module";

@Module({
	imports: [PrismaModule, FilesModule],
	controllers: [PhotosController],
	providers: [PhotosService],
})
export class PhotosModule {}
