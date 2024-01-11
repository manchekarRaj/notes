const dns = require('node:dns');

dns.lookup('yahoo.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});


