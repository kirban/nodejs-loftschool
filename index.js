const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2); // -D means param to delete entry folder
let entryPath = args[0];
let resultPath = args[1];

if (!entryPath) {
  console.error(`Missing argument! They should be listed like that: index.js <entryDataDir> <resultDataDir> [-D]elete`);
  process.exit(1);
}
if (!fs.existsSync(path.join(process.cwd(), entryPath))) {
  console.error('There is no such directory!');
  process.exit(1);
}

if (resultPath === undefined) {
  resultPath = 'result';
}

if (!fs.existsSync(path.join(process.cwd(), resultPath))) {
  fs.mkdir(path.join(process.cwd(), resultPath), err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    start();
  });
} else {
  start();
}

function start () {
  const readDir = (pathName) => {
    fs.readdir(pathName, (err, files) => {
      if (err) console.error(`Error reading dir ${pathName}: ${err}`);
      let filesAndDirs = files.filter(item => item !== '.DS_Store');
      filesAndDirs.forEach((item) => {
        fs.stat(path.join(pathName, item), (err, stats) => {
          if (err) console.error(`Error reading dir ${item}: ${err}`);
          if (stats.isDirectory()) {
            readDir(path.join(pathName, item));
          } else {
            const newFolderName = item.charAt(0).toLowerCase();
            const newPath = path.join(process.cwd(), resultPath, newFolderName);

            if (!fs.existsSync(newPath)) {
              fs.mkdirSync(newPath);
            }
            fs.copyFile(path.join(pathName, item), path.join(newPath, item), err => {
              if (err) {
                console.log(err);
                process.exit(1);
              }
            });
          }
        });
      });
    });
  };
  readDir(path.join(process.cwd(), entryPath));
}
