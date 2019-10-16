const Axios = require('axios');

function send(url, method = 'GET', headers = {}, data = {}) {

  if ( headers['Access-Control-Allow-Origin'] === undefined) {
    headers['Access-Control-Allow-Origin'] = '*';
  }

  if ( method.toUpperCase() == 'GET') {
    return Axios({
      url,
      method: method,
      headers: headers
    });
  }

  return Axios({
    url,
    method: method,
    headers: headers,
    data: data
  });
}

module.exports = {
  send: send,
};
