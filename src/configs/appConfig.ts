import { Configuration } from "hcconfig";
import type { IAppConfig } from "./IAppConfig";

console.log("Creating app config");

const appConfig = new Configuration<IAppConfig>(
    {
        foo: "bar",
        ready: false,
        counter: 0,
    },
    {}
);


export default appConfig;

console.log(appConfig.getConfigs());
