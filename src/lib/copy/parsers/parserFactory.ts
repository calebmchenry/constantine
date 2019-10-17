import { parseJava } from './parseJava';
import { parseJavascript } from './parseJavascript';

const ParserMap: ParserMap = {
    '.java': parseJava,
    '.js': parseJavascript,
};

export const getParser = (fileExtension: string): ParserFn => {
    const Parser = ParserMap[fileExtension];
    if (Parser == null) {
        return () => {
            throw new Error(
                `Could not find parser function for ${fileExtension} file extension`
            );
        };
    }
    return Parser;
};
