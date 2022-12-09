import React, { useState, useEffect, useRef } from "react";
import styles from "./App.module.css";

import fnGetCssFromInput from "./fnGetCssFromInput";

const Consts = {
    placeholder: {
        input: `Please type or paste the CSS...
        The Conversion is dynamic...`,

        output: `Converted "CSS-in-JS" appears here...`,
    }
};

const Comps = {
    heading: () => <div className={styles.headingWrapper}>
        <div className={styles.heading}>
            CSS to CSS-IN-JS
        </div>
    </div>,

    input: ({ value = "", reff= null, onChange = val => { } }) => <textarea className={styles.inputWrapper}
        ref={reff}
        value={value}
        onChange={event => onChange(event.target.value)}
        placeholder={Consts.placeholder.input}
    />,

    output: ({ value = "" }) => <textarea className={styles.outputWrapper}
        readOnly={true}
        value={value}
        placeholder={Consts.placeholder.output}
    />
};

function App() {

    const [stateInput, setStateInput] = useState("");
    const [stateOutput, setStateOutput] = useState("");

    const InputRef = useRef(null);

    // to bring focus to input field on every page reload
    useEffect(() => {
        InputRef.current.focus();
    }, []);

    // dynamic css conversion
    useEffect(() => {

        if (stateInput.length > 0) {

            const convertedCss = fnGetCssFromInput(stateInput);
            setStateOutput(convertedCss);
        }

        else
            setStateOutput("");

    }, [stateInput]);

    return (
        <div className={styles.page}>

            <Comps.heading />

            <div className={styles.textAreaEncloser}>

                <Comps.input
                    reff={InputRef}
                    value={stateInput}
                    onChange={value => setStateInput(value)}
                />

                <Comps.output
                    value={stateOutput}
                />

            </div>

        </div>
    )
}

export default App;