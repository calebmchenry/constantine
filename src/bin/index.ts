#!/usr/bin/env node
import program from 'commander';
import { copy } from '../lib/index';

const pkg = require('../../package.json');

program
    .version(pkg.version)
    .option('-f, --from <file>', 'file to copy from')
    .option('-t, --to <file>', 'file to copy to');

program.parse(process.argv);
copy(program.from).to(program.to);
