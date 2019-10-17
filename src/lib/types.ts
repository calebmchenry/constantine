// Copy
interface VariableMap {
    [key: string]: string | number | boolean;
}
type ParserFn = (fileContent: string) => VariableMap;
type ComposerFn = (variableMap: VariableMap) => string;
type ParserMap = {
    [key: string]: ParserFn;
};
type ComposerMap = {
    [key: string]: ComposerFn;
};

// Transform
interface FromCase {
    from: (variableName: string) => string;
}
interface ToCase {
    to: (variableName: string) => string;
}
type TransformFn = (variableMap: VariableMap) => VariableMap;
