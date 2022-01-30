import React, { useRef, useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {

    const [stateInput, setStateInput] = useState("");
    const [stateOutput, setStateOutput] = useState("");

    const InputRef = useRef(null);

    useEffect(() => {
        InputRef.current.focus();
    }, []);

    const clickConvert = () => {
        alert("ACTION DEFINED");
    }

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
                />

                {/* Output Field */}
                <textarea className={styles.outputWrapper}
                    readOnly={true}
                    value={stateOutput}
                />

            </div>

            {/* Convert Button */}
            <div className={styles.buttonWrapper}>
                <div className={styles.buttonConvert}
                    onClick={clickConvert}>
                    CONVERT
                </div>
            </div>

        </div>
    )
}

export default App;