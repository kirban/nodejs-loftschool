// // const assert = require('assert');
// const chai = require('chai');
// var expect = require('chai').expect;
// const chaiFS = require('chai-fs');
// const fs = require('fs');
//
// chai.use(chaiFS);
// describe('Tests for first hometask', function () {
//   let pathToEntryDir = './complex_folder';
//   let pathToResultDir = './result';
//   it('should have an entry directory with nested dirs', () => {
//     expect(pathToEntryDir).to.be.a
//       .directory('This path is not a dirname!').with
//       .subDirs(['cf1', 'cf2', 'cf3'], 'No nested directories!');
//   });
//   it('should make a directory with nested non-empty directories', function () {
//     let nestedDirs = [];
//     try {
//       fs.readdirSync(pathToResultDir).map(subDir => { if (subDir !== '.DS_Store') { nestedDirs.push(subDir); } });
//     } catch (err) {
//       throw new Error(`Error reading directories: ${err}`);
//     }
//     expect(pathToResultDir).to.be.a
//       .directory('This path is not a dirname!').with
//       .subDirs(nestedDirs, 'No nested directories!');
//     nestedDirs.map(subDirectory => {
//       // eslint-disable-next-line no-unused-expressions
//       expect('./' + pathToResultDir + '/' + subDirectory).to.be.a.directory().and.not.empty;
//     });
//   });
//   it('should make files', function () {
//
//   });
// });
