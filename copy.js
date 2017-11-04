'use strict';
const fs = require('fs');
const files = fs.readdirSync(__dirname + '/fixtures');
const path = require('path');

files.forEach((file) => {
  const {name} = path.parse(file)
  fs.copyFileSync(__dirname + '/fixtures/' + file, __dirname + '/fixtures/' + name + '_copy1.js')
  fs.copyFileSync(__dirname + '/fixtures/' + file, __dirname + '/fixtures/' + name + '_copy2.js')
  fs.copyFileSync(__dirname + '/fixtures/' + file, __dirname + '/fixtures/' + name + '_copy3.js')
  fs.copyFileSync(__dirname + '/fixtures/' + file, __dirname + '/fixtures/' + name + '_copy4.js')
  fs.copyFileSync(__dirname + '/fixtures/' + file, __dirname + '/fixtures/' + name + '_copy5.js')
  fs.copyFileSync(__dirname + '/fixtures/' + file, __dirname + '/fixtures/' + name + '_copy6.js')
  fs.copyFileSync(__dirname + '/fixtures/' + file, __dirname + '/fixtures/' + name + '_copy7.js')
  fs.copyFileSync(__dirname + '/fixtures/' + file, __dirname + '/fixtures/' + name + '_copy8.js')
  fs.copyFileSync(__dirname + '/fixtures/' + file, __dirname + '/fixtures/' + name + '_copy9.js')
  fs.copyFileSync(__dirname + '/fixtures/' + file, __dirname + '/fixtures/' + name + '_copy0.js')
})
