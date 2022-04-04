import { DynamicModule, Module } from "@nestjs/common";
import { ClientProxyFactory, Transport } from "@nestjs/microservices";
import { PMS_SERVICE } from "PMS/constants";
import { PMSService } from "PMS/service";

interface PMSModuleOptions {
	host: string;
	port: number;
}

@Module({})
export class PMSModule {
	static register(options: PMSModuleOptions): DynamicModule {
		return {
			global: true,
			module: PMSModule,
			providers: [
				{
					provide: PMS_SERVICE,
					useFactory: () => {
						return ClientProxyFactory.create({
							transport: Transport.TCP,
							options,
						});
					},
				},
				PMSService,
			],
			exports: [PMSService],
		};
	}
}
