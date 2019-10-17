export const parseJava: ParserFn = (fileContent: string) => {
    const variableMap: VariableMap = {};
    const lines = fileContent.split('\n');
    const regex = /(public\s+)?static\s+(final\s+)?String\s+([a-zA-z_0-9]+)\s*=\s*"(.*)";/;
    lines.forEach(line => {
        const matches = line.match(regex);
        if (matches != null) {
            const key = matches[3];
            const value = matches[4];
            variableMap[key] = value;
        }
    });
    return variableMap;
};
