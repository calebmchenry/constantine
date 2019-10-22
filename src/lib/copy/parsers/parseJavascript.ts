export const parseJavascript: ParserFn = (fileContent: string) => {
    const variableMap: VariableMap = {};
    const lines = fileContent.split('\n');
    const regex = /^(?!\/\/)\s*export\s+const\s+([a-zA-Z_0-9]+)\s*=\s*(.*)/;
    lines.forEach(line => {
        const matches = line.match(regex);
        if (matches != null) {
            const key = matches[1];
            let value = matches[2];

            // remove ending ";" if it exists
            value =
                value.substring(0, value.length - 1) +
                value.charAt(value.length - 1).replace(';', '');
            variableMap[key] = value;
        }
    });
    return variableMap;
};
