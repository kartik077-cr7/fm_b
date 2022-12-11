const app = require('./app')
const port = process.env.PORT 
console.log(' HOLAAAAA!!!!!!! ',port);
app.listen(port, () => {
	console.log('Server is running on port'+port);
})