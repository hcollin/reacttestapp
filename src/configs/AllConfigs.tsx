import { useConfigs } from "hcconfig";
import appConfig from "./appConfig";

const AllConfigs = () => {
    const configs = useConfigs(appConfig);

    return (
        <div>
            <h3>All configs</h3>
            <pre style={{textAlign: "left", padding: "6px", border: "solid 1px #FFF8"}}>{JSON.stringify(configs, null, 4)}</pre>
        </div>
    );
};

export default AllConfigs;
