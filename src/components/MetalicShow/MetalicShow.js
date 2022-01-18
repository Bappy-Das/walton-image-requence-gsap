
import React, { useRef } from "react";
import { Controller, Scene } from "react-scrollmagic";

import Sequence from "../../Sequence";

function MetalocShow() {

    const ref = useRef();
    return (

        <div className="">
            <Controller>
                <Scene duration="200%" triggerHook="onLeave" pin>
                    {progress => (
                        <div style={{ height: "100vh", position: "relative" }}>
                            <Sequence ref={ref} progress={progress} />
                        </div>
                    )}
                </Scene>
            </Controller>
        </div>

    );
}
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export default MetalocShow;