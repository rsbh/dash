import {remote} from 'electron'
import {parse} from 'url'

const {BrowserWindow} = remote

let mainWindow




export function googleAuth() {
  return dispatch => {
      mainWindow = new BrowserWindow({ width: 800, height: 600, show: false, 'node-integration': false });
      let authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=profile&client_id=${process.env.GOOGLE_AUTH_CLIENTID}&redirect_uri=http://localhost/auth/google`
      mainWindow.loadURL(authUrl);
      mainWindow.show();    
      mainWindow.webContents.on('will-navigate', (event, url) => {
        handleNavigation(url)
      })
      function handleNavigation (url) {
        const query = parse(url, true).query
        if (query) {
          if (query.error) {
            console.log(new Error(`There was an error: ${query.error}`))
          } else if (query.code) {
            // Login is complete
            mainWindow.removeAllListeners('closed')
            setImmediate(() => mainWindow.close())
            
            // This is the authorization code we need to request tokens
            dispatch({type: 'GOOGLE_LOGIN', payload: {login: true, code: query.code}})
          }
        }
    }
      mainWindow.webContents.on('did-get-redirect-request', (event, oldUrl, newUrl) => {
        handleNavigation(newUrl)
      })
      
      // Open the DevTools.
      // mainWindow.webContents.openDevTools()
      
      // Emitted when the window is closed.
      mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
      })
  }
}