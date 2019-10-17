export const composeJavascript: ComposerFn = (variableMap: VariableMap) => {
    const variableNames = Object.keys(variableMap);
    const fileContent = variableNames.reduce((str, variableName) => {
        return `${str}export const ${variableName} = "${variableMap[variableName]}";\n`;
    }, '');
    return `${fileContent}\n`;
};
