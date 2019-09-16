var redis = require('redis');
var client = redis.createClient(6379, "35.193.194.188");
client.auth("thisisactuallyagoodpassword");
client.on('connect', () => {console.log('connected to redis')})

writeValues = () => {
	return new Promise((resolve, reject) => {
		for (var i = 1; i <= 100; i++) {
			client.set(""+i, "This is value #" + i)
			console.log("Wrote " + i)
		}
	})
}

writeValues().then(client.quit())