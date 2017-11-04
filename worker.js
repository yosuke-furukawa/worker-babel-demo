'use strict';

const worker = require('worker');
const babel = require('babel-core');

worker.on('workerMessage', (filename) => {
  const result = babel.transformFileSync(__dirname + '/fixtures/' + filename, { "presets": ["es2015"] });
  worker.postMessage({ file: filename, content: result.code });
});
