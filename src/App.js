import React, { useState, useEffect, useRef } from "react";
import styles from "./App.module.css";

import fnGetCssFromInput from "./fnGetCssFromInput";

const Placeholder = {
    input: `Please type or paste the CSS...
The Conversion is dynamic...`,

    output: `Converted "CSS-in-JS" appears here...`,
}

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

            {/* Heading */}
            <div className={styles.headingWrapper}>
                <div className={styles.heading}>
                    CSS to CSS-IN-JS
                </div>
            </div>

            <div className={styles.textAreaEncloser}>

                {/* Input Field */}
                <textarea className={styles.inputWrapper}
                    ref={InputRef}
                    value={stateInput}
                    onChange={event => {
                        setStateInput(event.target.value);
                    }}
                    placeholder={Placeholder.input}
                />

                {/* Output Field */}
                <textarea className={styles.outputWrapper}
                    readOnly={true}
                    placeholder={Placeholder.output}
                    value={stateOutput}
                />

            </div>

        </div>
    )
}

export default App;