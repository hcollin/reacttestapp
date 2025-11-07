import { useConfig } from "hcconfig";
import appConfig from "./appConfig";
import type { IAppConfig } from "./IAppConfig";

const FollowingFoo = () => {
    const [foo] = useConfig<IAppConfig>(appConfig, "foo");

    return (
        <div>
            <h3>Following Foo Value:</h3>
            <p>Foo: {foo}</p>
        </div>
    );
};

export default FollowingFoo;
