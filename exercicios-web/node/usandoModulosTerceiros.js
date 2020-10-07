const _ = require('lodash') // vai procurar dentro de node_modules
const nodemon = require('nodemon')
setInterval(() => console.log(_.random(50, 60)), 2000)