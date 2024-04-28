const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./fs check/check1.txt', 'utf8');
const second = readFileSync('./fs check/check2.txt', 'utf8')

writeFileSync(
    './fs check/write-sync-check.txt',`${first}`, {flag: 'a'}
)