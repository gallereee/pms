import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { WinstonModule } from "nest-winston";
import * as winston from "winston";
import { PostsModule } from "posts/module";

@Module({
	imports: [
		ConfigModule.forRoot(),
		WinstonModule.forRoot({
			level: "info",
			format: winston.format.combine(
				winston.format.timestamp(),
				winston.format.json()
			),
			exitOnError: false,
			transports: [
				new winston.transports.File({
					filename: "logs/error.log",
					level: "error",
				}),
				new winston.transports.File({ filename: "logs/combined.log" }),
			],
		}),
		PostsModule,
	],
})
export class AppModule {}
