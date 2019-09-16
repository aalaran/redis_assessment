var redis = require('redis');
var client = redis.createClient(25556, "34.66.97.124");
client.auth("w45xPLJtIOTCDWav3lapNfwXQHkK2kJ4EHw57ziGZz7LNftk");
client.on('connect', () => {console.log('connected to redis')})

getValues = () => {
	return new Promise((resolve, reject) => {
		for (var i = 100; i >= 1; i--) {
			client.get(""+i, (error,result) => {
				if (!error) {	
					console.log(result);
				} else {
					console.log("Error: " + error);
				}	 
			}
			)
		}		
	}
	)
}

getValues().then(client.quit())
