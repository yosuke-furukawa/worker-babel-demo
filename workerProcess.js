'use strict';

const babel = require('babel-core');

process.on('message', (filename) => {
  const result = babel.transformFileSync(__dirname + '/fixtures/' + filename, { "presets": ["es2015"] });
  process.send({ file: filename, content: result.code });
});

