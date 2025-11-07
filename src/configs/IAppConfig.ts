import type { IConfig } from "hcconfig";

export interface IAppConfig extends IConfig {
    foo: string;
    ready: boolean;
    counter: number;
}
