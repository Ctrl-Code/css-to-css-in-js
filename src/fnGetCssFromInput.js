function getCamelCasedProperty(property) {

    // trim
    let newProperty = property.trim();

    // find scope of camelCase
    const dashIndex = newProperty.indexOf('-');

    // property requires (camelCase)ing
    if (dashIndex > -1) {

        let splitProperty = newProperty.split('');

        // replace - with next Uppercase character
        splitProperty.splice(dashIndex, 2,
            splitProperty[dashIndex + 1].toUpperCase());

        newProperty = splitProperty.join('');
    }

    return newProperty;
}

function getStringValue(value) {
    let newValue = value.trim();
    return `"${newValue}"`;
}

function getEndCharRemovedString(char, string) {

    let trimmedString = string.trim();
    let lastIndex = trimmedString.length - 1;

    if (trimmedString.charAt(lastIndex) === char)
        return trimmedString.slice(0, -1);

    else
        return trimmedString;
}

function fnGetCssFromInput(textAreaInput) {

    try {

        // remove last semicolon if present
        const semiColonRemovedInput = getEndCharRemovedString(';', textAreaInput);

        // segregate properties based on semi-colon
        const CssArray = semiColonRemovedInput.split(";");

        // loop over properties
        CssArray.forEach((css, index, self) => {

            let [property, value] = css.split(":");

            let newProperty = getCamelCasedProperty(property);
            let newValue = getStringValue(value);

            self[index] = `${newProperty}: ${newValue}`;
        });

        // append comma (,) at the end
        return CssArray.join(',\n') + ',';

    }

    catch (error) {

        if (error instanceof TypeError)
            return "Please put in proper css.";

        else {

            const { name, message } = error;

            // displaying on screen
            console.log('ERROR OCCURED', name, message);

            // and also 
            return `ERROR OCCURED\n-------------\nNAME: ${name}\nMESSAGE: ${message}`;
        }

    }


}

export default fnGetCssFromInput;