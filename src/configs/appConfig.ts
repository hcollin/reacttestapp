import { Configuration } from "hcconfig";
import type { IAppConfig } from "./IAppConfig";

const appConfig = new Configuration<IAppConfig>(
	{
		isMobile: false,
	},
	{},
);

export default appConfig;
