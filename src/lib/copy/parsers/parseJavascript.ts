export const parseJavascript: ParserFn = (fileContent: string) => {
    const variableMap: VariableMap = {};
    const lines = fileContent.split('\n');
    const regex = /export\s+const\s+([a-zA-Z_0-9]+)\s*= ['"](.*)['"];?/;
    lines.forEach(line => {
        const matches = line.match(regex);
        if (matches != null) {
            const key = matches[1];
            const value = matches[2];
            variableMap[key] = value;
        }
    });
    return variableMap;
};
