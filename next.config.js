const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        admin: 'topcoder728@gmail.com',
    }
}