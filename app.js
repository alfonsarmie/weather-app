//TODO: ADD CSS FILES INTO HBS || DO THE BACKEND WITH AXIOS AND REQUEST TO OPEN WEATHER API
require('dotenv').config();


const Server = require('./server/server')

const server = new Server();
server.listen();
