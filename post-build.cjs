/* eslint-disable no-undef */
const fs = require('fs');

fs.copyFile('dist/app.js', 'app-extensions/extensions/sdk/assets/app.js', (err) => {
  if (err) throw err;
});
