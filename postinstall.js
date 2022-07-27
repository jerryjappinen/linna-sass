const mv = require('mv')

mv('./src', './', {
  mkdirp: false,
  clobber: false
}, (err) => {
  if (err) {
    throw err;
  }
});
