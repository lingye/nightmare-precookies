module.exports = exports = function(Nightmare) {
  Nightmare.action(
    'preCookies',
    (name, options, parent, win, renderer, done) => {
      parent.on('preCookies', (cookies) => {
        win.webContents.session.webRequest.onBeforeSendHeaders((details, cb) => {
          if (!details) return;
          var headers = details.requestHeaders;
          if (headers.Cookie == null || headers.Cookie == '') {
            headers.Cookie = cookies;
            cb({ cancel: false, requestHeaders: headers })
          } else {
            cb({ cancel: false })
          }
        })
        parent.emit('preCookies');
      })
      done()
      return this;
    },
    function(cookies, done) {
      this.child.once('preCookies', done);
      this.child.emit('preCookies', cookies);
    }
  )
};