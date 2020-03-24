const {app, BrowserWindow} = require('electron');
const getChromeTabs = require('get-chrome-tabs');


(async () => {
  try {
    await getChromeTabs();
  } catch (err) {
    err.message; //=> 'Tried to get tabs of Chrome, but Chrome is currently not running.'
  }

  await getChromeTabs(); //=> [{windowIndex: 0, windowVisible: true, ...}, ...]
})();