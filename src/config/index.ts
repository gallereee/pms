export default () => {
	const config = {
		botAccessToken: process.env.BOT_ACCESS_TOKEN,
		telegramBaseUrl: "https://api.telegram.org/",
		telegramBotBaseUrl: "",
		telegramBotFilesBaseUrl: "",
		host: process.env.PMS_HOST,
		port: parseInt(process.env.PMS_PORT, 10),
	};

	config.telegramBotBaseUrl = `${config.telegramBaseUrl}bot${config.botAccessToken}/`;
	config.telegramBotFilesBaseUrl = `${config.telegramBaseUrl}file/bot${config.botAccessToken}/`;

	return config;
};
