'use strict';

const { Worker } = require('worker');
const numCpus = require('os').cpus().length;
const fs = require('fs');
const files = fs.readdirSync(__dirname + '/fixtures');
const filesLength = files.length;
const tasks = files.splice(0, numCpus);

const Emitter = require('events').EventEmitter;
const emitter = new Emitter();
const results = {}
var count = 0;

for (let i=0; i<numCpus; i++) {
  const worker = new Worker(__dirname + '/worker.js')
  worker.on('message', (result) => {
    count++;
    results[result.file] = result.content
    emitter.emit('start', count);
  })

  worker.on('online', () => {
    console.time('result')
    emitter.emit('start');
  })

  emitter.on('start', (count) => {
    if (tasks.length > 0) {
      worker.postMessage(tasks.shift())
    }

    if (files.length > 0) {
      tasks.push(files.shift())
      return;
    }

    if (count === filesLength) {
      console.timeEnd('result')
      process.exit(0);
    }
  })
}



