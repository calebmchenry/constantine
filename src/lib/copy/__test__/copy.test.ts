import fs from 'fs';
import { copy } from '../copy';

const mockedWriteFileSync = jest.fn();
fs.writeFileSync = mockedWriteFileSync;

test('copies js file to another js file', () => {
    let toFileContent;
    mockedWriteFileSync.mockImplementation(
        (_path: string, fileContent: string) => {
            toFileContent = fileContent;
        }
    );
    copy('./src/lib/copy/__test__/examples/RestConstants.js').to(
        './some/path.js'
    );
    expect(toFileContent).toMatchSnapshot();
});

test('copies java file to js file', () => {
    let toFileContent;
    mockedWriteFileSync.mockImplementation(
        (_path: string, fileContent: string) => {
            toFileContent = fileContent;
        }
    );
    copy('./src/lib/copy/__test__/examples/RestConstants.java').to(
        './some/path.js'
    );
    expect(toFileContent).toMatchSnapshot();
});
