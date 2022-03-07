const mongoose = require('mongoose')


main().catch(err => console.log(err))

async function main() {
    mongoose.connect(process.env.MONGODB_URI, () => console.log('db connectd'))
}


