const mv = require('mv')

// Upon install, move all files under src/ to the root folder
mv('../src', '../', {
  mkdirp: false,
  clobber: false
}, (err) => {
  if (err) {
    throw err;
  }
});
