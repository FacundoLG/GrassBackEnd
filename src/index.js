const app = require('./app')

const mani = async () => {
    await app.listen(4000)
    console.log('Server on port 4000')
}
mani()