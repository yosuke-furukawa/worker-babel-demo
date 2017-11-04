'use strict';

console.time('result')
const worker = require('worker');
const babel = require('babel-core');
const fs = require('fs')

const results = {}
const files = fs.readdirSync(__dirname + '/fixtures');
files.forEach((filename) => {
  const c = babel.transformFileSync(__dirname + '/fixtures/' + filename, 
                                    { "presets": ["es2015"] });
  const result = ({ file: filename, content: c.code })
  results[result.file] = result.content;
})
console.timeEnd('result')

