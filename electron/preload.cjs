const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // expose APIs here in the future
});
