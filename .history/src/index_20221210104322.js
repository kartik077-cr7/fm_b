const app = reuire('./app')
const port = process.env.PORT 

app.liste(port, () => {
	console.log('Server is running on port'+port);
})